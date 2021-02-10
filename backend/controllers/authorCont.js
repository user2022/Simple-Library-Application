const Author = require('../models/Author');

// Create Author
exports.createAuthor = async (req, res) => {
    try {
        let author = new Author();

        author.name = req.body.name;
        author.gender = req.body.gender;
        author.age = req.body.age;
        author.deceased = req.body.deceased;

        await author.save();

        await res.json({
            success: true,
            message: 'Successfully created a new author'
        })

    } catch(err) {
        await res.status(500).json({
            success: false,
            message: err.message
        })
    }
};

// Get all Authors
exports.getAll = async (req, res) => {
    try {
        // Mongoose method find to return all authors
        let authors = await Author.find();

        await res.json({
            success: true,
            authors: authors // Send all authors to API in JSON format
        })

    } catch(err) {
        await res.status(500).json({
            success: false,
            message: err.message
        })
    }
}
