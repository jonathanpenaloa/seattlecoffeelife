const mongoose = require('mongoose');
const myCoffeeSchema = require('./myCoffeeSchema');

module.exports = mongoose.model('myCoffee', myCoffeeSchema);