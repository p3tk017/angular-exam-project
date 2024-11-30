const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  number: { type: Number, required: true },
  manufacturer: { type: String, required: true },
  model: { type: String, required: true },
  drivers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Driver' }],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Car', carSchema);
