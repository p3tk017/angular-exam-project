const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  nationality: { type: String, required: true },
});

const carSchema = new mongoose.Schema({
  number: { type: Number, required: true },
  manufacturer: { type: String, required: true },
  model: { type: String, required: true },
  driver1: { type: driverSchema, required: true },
  driver2: { type: driverSchema, required: true }, 
  imageUrl: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Car', carSchema);
