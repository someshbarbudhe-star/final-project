const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { Notice, Inquiry } = require('./models/Notice');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection (Aap apna local URI ya MongoDB Atlas URI yahan dal sakte hain)
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/bps_balaghat';

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB successfully');
    
    // Default seed data agar database khali ho
    const count = await Notice.countDocuments();
    if (count === 0) {
      await Notice.insertMany([
        { title: "Admission Open for Academic Session 2026-27. Register Now!", date: "10 Sep 2026", urgent: true },
        { title: "Half Yearly Examination Schedule released for Classes I to XII.", date: "05 Sep 2026", urgent: false },
        { title: "Parent-Teacher Meeting (PTM) scheduled for upcoming Saturday.", date: "28 Aug 2026", urgent: false }
      ]);
      console.log('Default notices seeded to database');
    }
  })
  .catch(err => console.error('MongoDB connection error:', err));

// GET Notices API
app.get('/api/notices', async (req, res) => {
  try {
    const notices = await Notice.find().sort({ createdAt: -1 });
    res.json(notices);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch notices' });
  }
});

// POST Inquiry API (Saves to MongoDB)
app.post('/api/inquiry', async (req, res) => {
  try {
    const { studentName, parentName, phone, classApplying, message } = req.body;
    const newInquiry = new Inquiry({ studentName, parentName, phone, classApplying, message });
    await newInquiry.save();
    res.status(201).json({ success: true, message: "Inquiry saved to database successfully!" });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save inquiry' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`MERN Server running seamlessly on port ${PORT}`);
});