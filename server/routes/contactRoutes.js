import express from 'express';
import Contact from '../models/contact.model.js';
import { authenticateToken, isAdmin } from '../helpers/authMiddleware.js';

const router = express.Router();

// Create contact (open to all)
router.post('/', async (req, res) => {
  try {
    const { firstname, lastname, email } = req.body;
    const newContact = new Contact({ firstname, lastname, email });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Admin only: Get all contacts
router.get('/', authenticateToken, isAdmin, async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Admin only: Delete contact by ID
router.delete('/:id', authenticateToken, isAdmin, async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Contact not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;

