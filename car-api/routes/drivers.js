const express = require('express');
const Driver = require('../models/Driver');
const router = express.Router();

// Get all drivers
router.get('/', async (req, res) => {
  const drivers = await Driver.find();
  res.json(drivers);
});

// Create a driver
router.post('/', async (req, res) => {
  try {
    const { name, age, nationality } = req.body;
    const driver = new Driver({ name, age, nationality });
    await driver.save();
    res.status(201).json(driver);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
