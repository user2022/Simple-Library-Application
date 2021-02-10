const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    gender: {type: String},
    age: {type: Number},
    deceased: {type: Boolean}
});

module.exports = mongoose.model('Author', authorSchema);
