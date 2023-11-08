<!-- 
    Deployed my Api's on render.com

## Introduction
This document provides a guide on how to use the RESTful API for book management. The API is built using Node.js and Express.js and uses MongoDB as a database. The API provides endpoints for creating, reading, updating, and deleting books.

## Base URL
The base URL for the API is `https://book-managing.onrender.com`.

## Endpoints
The following endpoints are available for the API:

### Show All Books
Endpoint: `/api/showAllBooks`

This endpoint returns a list of all books in the database.

#### Request
```
GET /api/showAllBooks
```

#### Response
```
[
    {
        "_id": "5f9d6a7d3c8d9f0017a7e4d0",
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "summary":"Sample One"
    },
    {
        "_id": "5f9d6a7d3c8d9f0017a7e4d1",
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "summary":"Sample Two"
    }
]
```

### Show Single Book by ID
Endpoint: `/showBook`

This endpoint returns a single book by ID.

#### Request
```
GET /showBook
Body
{
    "id": "5f9d6a7d3c8d9f0017a7e4d0"
}

```

#### Response
```
{
    "_id": "5f9d6a7d3c8d9f0017a7e4d0",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "genre": "Novel",
    "published": "1925"
}
```

### Update Book by ID
Endpoint: `/updateBook`

This endpoint updates a book by ID.

#### Request
```
PUT /updateBook

{   "id":"5f9d6a7d3c8d9f0017a7e4d0"
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "summary":"Sample One"
}
```

#### Response
```
{
    "_id": "5f9d6a7d3c8d9f0017a7e4d0",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "genre": "Novel",
    "published": "1922"
}
```

### Add New Book
Endpoint: `/addNewBook`

This endpoint adds a new book to the database.

#### Request
```
POST /addNewBook
{
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "genre": "Novel",
    "published": "1951"
}
```

#### Response
```
{
    "_id": "5f9d6a7d3c8d9f0017a7e4d2",
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "genre": "Novel",
    "published": "1951"
}
```

### Delete Single Book by ID
Endpoint: `/deleteBook/:id`

This endpoint deletes a single book by ID.

#### Request
```
DELETE /deleteBook/5f9d6a7d3c8d9f0017a7e4d0
```

#### Response
```
{
    "_id": "5f9d6a7d3c8d9f0017a7e4d0",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "genre": "Novel",
    "published": "1925"
}
```

```
For Local Environment Setup

package install -> npm install 
run project -> npm start

Note:
create a .env file and add the followings
PORT = 8080
BASE_URL = "http://localhost:"
MONGO_URL = "your mongodb atlas link"

```

 -->