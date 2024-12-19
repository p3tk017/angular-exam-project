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
router.get('/:id', async (req, res) => {
  try {
    const car = await Car.findById(req.params.id).populate('owner', '_id');
    if (!car) return res.status(404).json({ message: 'Car not found' });
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a car
router.post('/', verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const carData = { ...req.body, owner: userId };

    const car = new Car(carData);

    await car.save();
    res.status(201).json({ message: 'Car created successfully', car });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a car
router.put('/:id', verifyToken, async (req, res) => {
  try {
    const { id } = req.params; // Car ID from the route
    const userId = req.user.id; // Authenticated user ID (from middleware)
    const updates = req.body; // Updated data from the request body

    // Find the car and check ownership
    const car = await Car.findById(id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }

    if (car.owner.toString() !== userId) {
      return res.status(403).json({ message: 'You are not authorized to edit this car' });
    }

    // Update car
    const updatedCar = await Car.findByIdAndUpdate(id, updates, { new: true });

    res.status(200).json(updatedCar);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a car
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    const carId = req.params.id;
    const deletedCar = await Car.findByIdAndDelete(carId);

    if (!deletedCar) {
      return res.status(404).json({ message: 'Car not found' });
    }

    res.status(200).json({ message: 'Car deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting car', error });
  }
});

module.exports = router;

module.exports = router;
