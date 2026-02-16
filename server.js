// 1. You already ran: npm init -y
// 2. You already ran: npm install express

// 3. Setup basic Express server on port 3000

const express = require('express');
const app = express();
const port = 3000;

// Important: so we can read JSON sent in POST/PUT requests
app.use(express.json());

// 4. Create an array to store book objects {id, title, author}
let books = [
    { id: 1, title: "Clean Code", author: "Robert C. Martin" },
    { id: 2, title: "The Pragmatic Programmer", author: "Andrew Hunt" }
];

let nextId = 3;

// 5. GET /books → return all books
app.get('/books', (req, res) => {
    res.json(books);
});

// 6. POST /books → add a new book from request body
app.post('/books', (req, res) => {
    if (!req.body) {
        return res.status(400).json({ error: "No data sent in request body" });
    }

    const { title, author } = req.body;

    if (!title || !author) {
        return res.status(400).json({ error: "Both title and author are required" });
    }

    // rest of your code...

    const newBook = {
        id: nextId++,
        title,
        author
    };

    books.push(newBook);

    // 201 = Created
    res.status(201).json(newBook);
});

// 7. PUT /books/:id → update a book by ID
app.put('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, author } = req.body;

    const book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).json({ error: "Book not found" });
    }

    // Update only provided fields (partial update is also common)
    if (title)  book.title  = title;
    if (author) book.author = author;

    res.json(book);
});

// 8. DELETE /books/:id → remove a book
app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const index = books.findIndex(b => b.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "Book not found" });
    }

    // remove item at that index
    books.splice(index, 1);

    // 204 = No Content (successful deletion)
    res.status(204).send();
});

// Start server
app.listen(port, () => {
    console.log(`Server running → http://localhost:${port}`);
    console.log("Available endpoints:");
    console.log("  GET    /books");
    console.log("  POST   /books");
    console.log("  PUT    /books/:id");
    console.log("  DELETE /books/:id");
});