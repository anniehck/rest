require('dotenv').config({ path: './variables.env' });
const express = require('express');
const app = express();
const db = require('./db');

const HotelController = require('./hotel/HotelController');
app.use('/hotels', HotelController);

module.exports = app;
