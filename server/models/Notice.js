const mongoose = require('mongoose');

const NoticeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  urgent: { type: Boolean, default: false }
}, { timestamps: true });

const InquirySchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  parentName: { type: String, required: true },
  phone: { type: String, required: true },
  classApplying: { type: String, required: true },
  message: { type: String }
}, { timestamps: true });

module.exports = {
  Notice: mongoose.model('Notice', NoticeSchema),
  Inquiry: mongoose.model('Inquiry', InquirySchema)
};