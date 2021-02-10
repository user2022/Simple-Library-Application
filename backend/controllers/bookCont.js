const Book = require('../models/Book');

// Create
// req and res parameters let me access incoming requests and lets me put out a response
exports.createBook = async (req, res) => {
    try {
        // Creating a new book
        let book = new Book();

        // Setting inputs from the request body as my book objects property values
        book.title = req.body.title;
        book.author = req.body.author;
        book.description = req.body.description;
        book.genre = req.body.genre;
        book.photo = req.file.location; // req.file.location will the the URL from AWS S3

        // Saving the data from request body to my book object
        await book.save();

        // Sending a message to the API that the request has been successful and that a book has been created in the database
        await res.json({ // Sending in json format
            success: true,
            message: 'Successfully created a book'
        })

    } catch(err) {
        // If there's an error, send a message to the API that there's been an error
        await res.status(500).json({
            success: false,
            message: err.message
        })
    }
};

// Read // Get every book
exports.getAll = async (req, res) => {
    try {
        // Book.find() will return every book document in my Books collection in DB
        // populate method will populate the author property with the correct author object from author collection
        let books = await Book.find().populate('author').exec(); // exec will execute the populate method

        await res.json({
            success: true,
            books: books // Sending list of all books to API
        })

    } catch(err) {
        await res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

// Read // Get one
exports.getOne = async (req, res) => {
    try {
        // Using mongoose findOne method to get only one book that shares the ID from the URL parameter
        let book = await Book.findOne({_id: req.params.id}).populate('author').exec();

        await res.json({
            success: true,
            book: book // Sending single book to API
        })

    } catch(err) {
        await res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

// Update
exports.updateOne = async (req, res) => {
    try {
        let book = await Book.findOneAndUpdate({_id: req.params.id}, {
            // $set is provided by mongoose and let's me replace the current values with the new ones from the incoming API request
            $set: {
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                genre: req.body.genre,
                photo: req.file.location
            }
        }, {upsert: true});

        await res.json({
            success: true,
            updatedBook: book
        })

    } catch(err) {
        await res.status(500).json({
            success: false,
            message: err.message
        })
    }
};

// Delete
exports.deleteOne = async (req, res) => {
    try {
        let deletedBook = await Book.findOneAndDelete({_id: req.params.id});

        // If the book deleted, send a message to the API that it did so
        if (deletedBook) await res.json({success: true, message: 'Successfully deleted'});

    } catch(err) {
        await res.status(500).json({
            success: false,
            message: err.message
        })
    }
}
