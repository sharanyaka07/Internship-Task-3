# Internship Task 3 - Books CRUD API

A simple RESTful API built with **Node.js** and **Express** to manage a collection of books.  
Perfect for learning backend development basics and CRUD operations.

## Features

- **GET /books** → Retrieve all books
- **GET /books/:id** → (optional - you can add) Get a single book by ID
- **POST /books** → Add a new book (requires title & author)
- **PUT /books/:id** → Update book title and/or author (partial updates supported)
- **DELETE /books/:id** → Remove a book by ID
- Basic input validation (title & author required)
- In-memory data storage (array) – easy to understand & modify

## Tech Stack / Tools Used

- **Node.js**  
- **Express.js** – web framework  
- **express.json()** – built-in JSON body parser  
- **JavaScript (ES6+)**  
- **npm** – package manager  
- **Postman** / **Thunder Client** – for API testing  
- **Git** & **GitHub** – version control
## Demo / Screenshots

### Server running
![Server running in terminal]
### GET all books
![GET /books response in Postman](Get-operation.png)

### POST new book
![POST /books - adding new book]

### PUT update book
![PUT /books/:id - updating title](Putoperation.png)

### DELETE book
![DELETE /books/:id - 204 success](delete-operation.png)
## Basic Setup & Run

1. Clone the repo:
   ```bash
   git clone https://github.com/sharanyaka07/Internship-Task-3.git
   cd Internship-Task-3
