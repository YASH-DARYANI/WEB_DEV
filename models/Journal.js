import mongoose from 'mongoose';

const journalSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String },
  dateVisited: { type: Date, default: Date.now },
}, { timestamps: true });

const Journal = mongoose.model('Journal', journalSchema);
export default Journal;
