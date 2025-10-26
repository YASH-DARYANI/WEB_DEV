import Journal from '../models/Journal.js';

export const createJournal = async (req, res) => {
  try {
    const { title, location, description, dateVisited } = req.body;
    if (!title || !location) return res.status(400).json({ message: 'Title and location are required' });

    const journal = await Journal.create({
      user: req.user._id,
      title,
      location,
      description,
      dateVisited,
    });
    res.status(201).json(journal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getJournals = async (req, res) => {
  try {
    const journals = await Journal.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(journals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateJournal = async (req, res) => {
  try {
    const journal = await Journal.findById(req.params.id);
    if (!journal) return res.status(404).json({ message: 'Journal not found' });
    if (journal.user.toString() !== req.user._id.toString()) return res.status(401).json({ message: 'Unauthorized' });

    const updates = req.body;
    Object.assign(journal, updates);
    const updated = await journal.save();
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteJournal = async (req, res) => {
  try {
    const journal = await Journal.findById(req.params.id);
    if (!journal) return res.status(404).json({ message: 'Journal not found' });
    if (journal.user.toString() !== req.user._id.toString()) return res.status(401).json({ message: 'Unauthorized' });

    await journal.deleteOne();
    res.json({ message: 'Journal deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
