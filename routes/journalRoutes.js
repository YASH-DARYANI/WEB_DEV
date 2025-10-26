import express from 'express';
const router = express.Router();
import {
  createJournal,
  getJournals,
  updateJournal,
  deleteJournal,
} from '../controllers/journalController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/').get(protect, getJournals).post(protect, createJournal);
router.route('/:id').put(protect, updateJournal).delete(protect, deleteJournal);

export default router;
