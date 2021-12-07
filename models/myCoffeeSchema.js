const Schema = require('mongoose').Schema;

const myCoffeeSchema = new Schema({
    name: {type: String, require: true},
    description: {type: String, require: true},
    Ingredients: {type: String, require: true}
}, {
    timestamps: true
});

module.exports = myCoffeeSchema;

