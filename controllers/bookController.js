const Books = require("../models/bookModal");
const mongoose = require('mongoose');

// show all books
exports.showAllBooks = async (req, res, next) => {
  try {
    const data = await Books.find();
    res.json({ message: "Success", data: data });
  } catch (error) {
    next(error);
  }
};
// show single book
exports.showBookById = async (req, res, next) => {
  try {
    const data = await Books.findOne({ _id: req.body.id });
    if (data == null) {
      next({ message: "Incorrect id" });
    } else {
      res.json({ message: "Success", data: data });
    }
  } catch (error) {
    next(error);
  }
};

// add book
exports.addBook = async (req, res, next) => {
  try {
    const data = await Books.create(req.body);
    res.json({ message: "Book added", status: 200 });
  } catch (error) {
    next(error);
  }
};

// update book
exports.updateBookById = async (req, res, next) => {
  try {
    
    // check id key present or not
    if (!("id" in req.body)){
      next({message:"Id key not found"})
    }
    // check if id is incorrect
    if(!(mongoose.Types.ObjectId.isValid(req.body.id))){
      next({message:"Incorrect id"})
    }
    
    const query = {};
    for (let key in req.body) {
        if (req.body[key] && key != "id") {
            query[key] = req.body[key];
        }
    }
    
    // if correct id
    const data = await Books.updateOne({ _id: req.body.id }, { $set: query });

    // checking book updated or not
    if (data["acknowledged"]) {
        res.json({ message: "Book updated" });
    } else {
        next({ message: "Book not updated" });
    }

  } catch (error) {
    next(error);
  }
};

// delete book
exports.deleteBookById = async (req, res, next) => {
  try {
   
    // check if id is incorrect
    if(!(mongoose.Types.ObjectId.isValid(req.params.id))){
      next({message:"Incorrect id"})
    }
   
    // delete the data based on id
    const data = await Books.deleteOne({ _id: req.params.id });
    res.json({ message: "Book deleted" });

  } catch (error) {
    next(error);
  }
};
