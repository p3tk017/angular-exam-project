const express = require('express');
const Circuit = require('../models/Circuit');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const circuits = await Circuit.find();
    res.status(200).json(circuits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const circuit = await Circuit.findById(req.params.id);
    if (!circuit) return res.status(404).json({ message: 'Circuit not found' });
    res.status(200).json(circuit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { imageUrl, name, location, length, raceDate } = req.body;

    const circuit = new Circuit({
      imageUrl,
      name,
      location,
      length,
      raceDate,
    });

    await circuit.save();
    res.status(201).json({ message: 'Circuit created successfully', circuit });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { imageUrl, name, location, length, raceDate } = req.body;

    const circuit = await Circuit.findByIdAndUpdate(
      req.params.id,
      { imageUrl, name, location, length, raceDate },
      { new: true }
    );

    if (!circuit) return res.status(404).json({ message: 'Circuit not found' });

    res.status(200).json({ message: 'Circuit updated successfully', circuit });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const circuit = await Circuit.findByIdAndDelete(req.params.id);

    if (!circuit) return res.status(404).json({ message: 'Circuit not found' });

    res.status(200).json({ message: 'Circuit deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
