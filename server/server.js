const express = require('express');
const cors = require('cors');
const colors = require('colors');
const dotenv = require('dotenv');

// config env file
dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());



// PORT
const PORT = process.env.PORT || 4200;

app.listen(PORT, () => {
    console.log(`server is running on ${process.env.DEV_MODE} mode in port ${PORT}`.bgCyan.white);
})