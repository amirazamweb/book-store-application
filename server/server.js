const express = require('express');
const cors = require('cors');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require('./db/db');
const authRoutes = require('./routes/authRoutes');

// config env file
dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

//connect database to application
connectDB();

// routes
app.use('/api/v1/auth', authRoutes);

// PORT
const PORT = process.env.PORT || 4200;

app.listen(PORT, () => {
    console.log(`server is running on ${process.env.DEV_MODE} mode in port ${PORT}`.bgCyan.white);
})