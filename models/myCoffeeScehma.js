const Schema = required('mongoose');

const myCoffeeSchema = new Schema({
    name: {type: String, require: true},
    description: {String},
    Ingredients: {String}
}, {
    timestamps: true
});

module.exports = myCoffeeSchema;

