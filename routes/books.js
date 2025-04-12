const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const books = require("../util/data");
const {validateQuery, validateBook} = require("../middleware/validateQuery.js");
const {bookQuerySchema, createBookSchema} = require("../validators/book.js");
const Book = require("../models/Book");

// List all books
router.get("/",validateQuery(bookQuerySchema), async (req, res) => {
  const { q, sortBy = "createdAt", order = "DESC" } = req.query;
  
  try {
    const where = q
      ? {
          [Op.or]: [
            { title: { [Op.like]: `%${q}%` } },
            { author: { [Op.like]: `%${q}%` } },
          ],
        }
      : {};

    const books = await Book.findAll({
      where,
      order: [[sortBy, order]],
    });
    res.status(200).json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Get by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findByPk(id);

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.status(200).json(book);
  } catch (error) {
    console.error("Error fetching book:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Create book
router.post("/", validateBook(createBookSchema), async (req, res) => {
  try {
    const { title, author } = req.body;
    const existingBook = await Book.findOne({ where: { title, author } });

    if (existingBook) {
      return res.status(409).json({ error: "Book already exists" });
    }
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not create the book" });
  }
});



// Update
router.put("/:id",validateBook(createBookSchema), async (req, res) => {
  const { id } = req.params;
  const { title, author, finished } = req.body;

  try {
    const book = await Book.findByPk(id);

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    await book.update({ title, author, finished });

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findByPk(id);

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    await book.destroy();

    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
