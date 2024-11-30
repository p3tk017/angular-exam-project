const express = require('express');
const Car = require('../models/Car');
const Driver = require('../models/Driver');
const { verifyToken } = require('../middleware/auth');
const router = express.Router();

// Get all cars
router.get('/', async (req, res) => {
  const cars = await Car.find().populate('drivers owner');
  res.json(cars);
});

// Create a car
router.post('/', verifyToken, async (req, res) => {
  try {
    const { number, manufacturer, model, drivers } = req.body;
    const car = new Car({
      number,
      manufacturer,
      model,
      drivers,
      owner: req.user.id,
    });
    await car.save();
    res.status(201).json(car);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
