import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
  name: String,
  url: String,
  ingredients: String,
  directions: String,
  nutrition: String
});

export default mongoose.model('cards', cardSchema);
