const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coffeeSchema = new Schema({
    name: {type: String, require: true},
    description: {type: String, require: true},
    Ingredients: {type: String, require: true}
}, {
    timestamps: true
});

module.exports = mongoose.model('myCoffee', coffeeSchema);