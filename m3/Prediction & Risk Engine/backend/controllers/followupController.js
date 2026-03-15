const mongoose = require('mongoose');
const Followup = require('../models/Followup');
const Student  = require('../models/Student');
const { sendFollowupEmail } = require('../services/emailService');

async function addFollowup(req, res) {
  const { student_id, note, follow_date, send_email } = req.body;
  if (!student_id || !note || !follow_date)
    return res.status(400).json({ error: 'student_id, note and follow_date are required.' });

  try {
    // Save follow-up note
    await Followup.create({
      student_id:    new mongoose.Types.ObjectId(student_id),
      counsellor_id: new mongoose.Types.ObjectId(req.user.id),
      note,
      follow_date:   new Date(follow_date),
    });

    let emailStatus = { sent: false, error: null };

    if (send_email) {
      const student = await Student.findById(student_id);
      if (!student?.email) {
        emailStatus = { sent: false, error: 'Student has no email address on record.' };
      } else {
        // Check email credentials are configured
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
          emailStatus = { sent: false, error: 'Email not configured on server. Add EMAIL_USER and EMAIL_PASS in environment variables.' };
        } else {
          const result = await sendFollowupEmail({
            studentEmail:   student.email,
            studentName:    student.name,
            counsellorName: req.user.name,
            note,
            followDate: follow_date,
          });
          emailStatus = result.success
            ? { sent: true, error: null }
            : { sent: false, error: result.error };
        }
      }
    }

    res.json({
      message:     'Follow-up note saved successfully.',
      email_sent:  emailStatus.sent,
      email_error: emailStatus.error,
    });

  } catch (err) {
    console.error('addFollowup error:', err.message);
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
}

async function getFollowups(req, res) {
  try {
    const studentId = req.params.student_id;

    const followups = await Followup.find({
      student_id: new mongoose.Types.ObjectId(studentId)
    })
      .populate('counsellor_id', 'name')
      .sort({ follow_date: -1, createdAt: -1 });

    res.json(followups.map(f => ({
      id:              f._id,
      note:            f.note,
      follow_date:     f.follow_date,
      created_at:      f.createdAt,
      counsellor_name: f.counsellor_id?.name || 'Unknown',
    })));
  } catch (err) {
    console.error('getFollowups error:', err.message);
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
}

async function getMyFollowups(req, res) {
  try {
    const followups = await Followup.find({
      counsellor_id: new mongoose.Types.ObjectId(req.user.id)
    })
      .populate({
        path: 'student_id',
        populate: [
          { path: 'branch_id',    select: 'name' },
          { path: 'risk_level_id', select: 'level_name' },
        ],
      })
      .sort({ follow_date: -1 });

    res.json(followups.map(f => ({
      id:           f._id,
      note:         f.note,
      follow_date:  f.follow_date,
      created_at:   f.createdAt,
      student_name: f.student_id?.name       || 'Unknown',
      branch_name:  f.student_id?.branch_id?.name || '—',
      level_name:   f.student_id?.risk_level_id?.level_name || '—',
    })));
  } catch (err) {
    console.error('getMyFollowups error:', err.message);
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
}

module.exports = { addFollowup, getFollowups, getMyFollowups };
