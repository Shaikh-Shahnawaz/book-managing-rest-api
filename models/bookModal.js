const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
      },

      author:{
        type:String,
        required:true,
     },
     summary:{
        type:String,
        required:true,
     },
})

const Books = mongoose.model('books',bookSchema)

module.exports = Books
