const router = require('express').Router();
const authorCont = require('../controllers/authorCont');

// POST request - create a new author
router.post('/authors', authorCont.createAuthor);

// GET request - get all authors
router.get('/authors', authorCont.getAll);

module.exports = router;
