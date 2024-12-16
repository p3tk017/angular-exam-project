const express = require('express');
const Car = require('../models/Car');
const { verifyToken } = require('../middleware/auth');
const router = express.Router();

// Get all cars
router.get('/', async (req, res) => {
  try {
    const cars = await Car.find().populate('owner', 'name email');
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific car
router.get('/:id', verifyToken , async (req, res) => {
  try {
    const car = await Car.findById(req.params.id).populate('owner', 'name email');
    if (!car) return res.status(404).json({ message: 'Car not found' });
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a car
router.post('/', verifyToken, async (req, res) => {
  try {
    const { number, manufacturer, model, driver1, driver2 } = req.body;

    const car = new Car({
      number,
      manufacturer,
      model,
      driver1,
      driver2,
      owner: req.user.id,
    });

    await car.save();
    res.status(201).json({ message: 'Car created successfully', car });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a car
router.put('/:id', verifyToken, async (req, res) => {
  try {
    const { number, manufacturer, model, driver1, driver2 } = req.body;

    const car = await Car.findOneAndUpdate(
      { _id: req.params.id, owner: req.user.id }, // Ensure only owner can update
      { number, manufacturer, model, driver1, driver2 },
      { new: true }
    );

    if (!car) return res.status(404).json({ message: 'Car not found or unauthorized' });

    res.status(200).json({ message: 'Car updated successfully', car });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a car
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    const car = await Car.findOneAndDelete({ _id: req.params.id, owner: req.user.id });

    if (!car) return res.status(404).json({ message: 'Car not found or unauthorized' });

    res.status(200).json({ message: 'Car deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

module.exports = router;
