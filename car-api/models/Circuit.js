const mongoose = require('mongoose');

const circuitSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true }, 
  name: { type: String, required: true }, 
  location: { type: String, required: true }, 
  length: { type: Number, required: true },
  raceDate: { type: String, required: true },
  description: { type: String, required: true}
});

module.exports = mongoose.model('Circuit', circuitSchema);