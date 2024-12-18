require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser')

const authRoutes = require('./routes/auth');
const carRoutes = require('./routes/cars');
const driverRoutes = require('./routes/drivers');
const circuitsRouter = require('./routes/circuits');

const app = express();
app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true, // Allow cookies
}));
app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/cars', carRoutes);
app.use('/api/drivers', driverRoutes);
app.use('/api/circuits', circuitsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
