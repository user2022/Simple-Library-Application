const mongoose = require('mongoose');

// Defining the shape of my book schema for DB
const bookSchema = new mongoose.Schema({
    title: {type: String, required: true}, // title must be of type string and is required
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'Author'}, // Type set to a mongodb object ID and included a reference so it can easily be accessed in controller
    description: {type: String},
    genre: {type: String},
    photo: {type: String, required: false} // Will be a URL of photo from AWS S3
});

// Exporting my schema to use in controller
module.exports = mongoose.model('Book', bookSchema);
