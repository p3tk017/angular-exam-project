const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  nationality: { type: String, required: true },
});

module.exports = mongoose.model('Driver', driverSchema);
