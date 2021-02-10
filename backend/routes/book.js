const router = require('express').Router(); // Importing express router which lets me set up routes for my book API
const bookCont = require('../controllers/bookCont'); // Getting access to my book controller functions

const upload = require('../middlewares/upload-photo'); // Importing my upload photo middleware

// POST request - create a new book
router.post('/books', upload.single('photo'), bookCont.createBook);
// Only uploading a single file so using the single method from multer
// req.file in my controller is the 'photo' file


// GET request - get all books
router.get('/books', bookCont.getAll);

// GET request - get ONE book // /:id will be the parameter that I am getting through req.params.id in my controller
router.get('/books/:id', bookCont.getOne);

// PUT request - update a single book
router.put('/books/:id', upload.single('photo'), bookCont.updateOne);

// DELETE request - delete a single book
router.delete('/books/:id', bookCont.deleteOne);

module.exports = router;
