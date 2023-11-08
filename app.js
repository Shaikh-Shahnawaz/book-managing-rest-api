const express = require('express')
require('dotenv').config()
const cors = require('cors')
const bookRoutes = require('./routes/bookRoutes')
const { centralErrorHandler } = require('./controllers/centralError')

const app = express()

// built in middleware
app.use(cors()) // Enable All CORS Requests
app.use(express.json()) //  parses incoming requests with JSON payloads
app.use(express.urlencoded({extended:true})) // parses incoming requests with URL-encoded payloads



// route middleware
app.use("/api",bookRoutes)

// handle incorrect url
app.use("*",(req, res, next) => {
    next({message:"Incorrect URL"})
});

// central error handler middleware
app.use(centralErrorHandler)

module.exports = app