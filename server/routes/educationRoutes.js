// File: routes/educationRoutes.js
import express from 'express';
import Education from '../models/qualification.model.js';
import { isAdmin } from '../helpers/authMiddleware.js';

const router = express.Router();

// Get all educations (everyone can read)
router.get('/', async (req, res) => {
  try {
    const educations = await Education.find();
    res.json(educations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Admin-only: Create new education entry
router.post('/', isAdmin, async (req, res) => {
  try {
    const newEducation = new Education(req.body);
    await newEducation.save();
    res.status(201).json(newEducation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Admin-only: Update education by id
router.put('/:id', isAdmin, async (req, res) => {
  try {
    const updatedEducation = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedEducation) return res.status(404).json({ message: 'Education not found' });
    res.json(updatedEducation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Admin-only: Delete education by id
router.delete('/:id', isAdmin, async (req, res) => {
  try {
    const deleted = await Education.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Education not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;

