import express from "express";
import fs from "fs";
import compression from "compression";
import { v4 as uuidv4 } from 'uuid';

const PORT = 3000;
const HOST = 'localhost';

const server = express();
server.use(express.json());
server.use(compression());

let books = JSON.parse(fs.readFileSync("./books_store.db.json", "utf-8"));

server.get('/books', (req, res) => {
    const availableBooks = books.filter((book) => book.isAvailable === true);
    res.send(availableBooks);
});

server.get('/books/:id', (req, res) => {
    const specificBook = books.find((book) => book.id === req.params.id);
    if (!specificBook) {
        return res.status(404).send({ message: `Book with id: ${req.params.id} was not found` });
    }
    res.send(specificBook);
});

server.post('/books', (req, res) => {
    try {
        const { bookTitle, isAvailable, genre, author, pages } = req.body;
        if (!bookTitle || !isAvailable || !genre || !author || !pages) {
            throw new Error("Invalid book data.");
        }
        const newBook = { id: uuidv4(), bookTitle, isAvailable, genre, author, pages };
        books.push(newBook);
        fs.writeFile("books_store.db.json", JSON.stringify(books, null, 2), (err) => {
            if (err) throw err;
            res.status(201).send({ message: 'New book created:', newBook });
        });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

server.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

server.listen(PORT, HOST, () => {
    console.log(`Server is up and running on http://${HOST}:${PORT}`);
});
