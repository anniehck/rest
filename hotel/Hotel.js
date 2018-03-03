const mongoose = require('mongoose');
const HotelSchema = new mongoose.Schema({
    name: String,
    city: String,
    state: String,
    country: String,
    locale: String,
    taId: Number,
    rating: Number,
    keywords: Array,
    waterfront: Boolean,
    attractions: Array,
    established: Number
});

mongoose.model('Hotel', HotelSchema);

module.exports = mongoose.model('Hotel');
