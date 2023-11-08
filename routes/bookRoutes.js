const express = require('express')
const { showAllBooks, addBook,showBookById,updateBookById,deleteBookById } = require('../controllers/bookController')
const router = express.Router()

// show all books
router.get('/showAllBooks',showAllBooks)

// show single book
router.get('/showBook',showBookById)

// add book
router.post('/addNewBook',addBook)

// update book details
router.put('/updateBook',updateBookById)

// delete book
router.delete('/deleteBook/:id',deleteBookById)

module.exports = router