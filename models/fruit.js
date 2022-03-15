const mongoose = require('mongoose');

const fruitSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    price: { type: Number, required: true },
    fruitId: { type: Number, require: true }
});

module.exports = mongoose.model('Fruit', fruitSchema);