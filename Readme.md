"# 📚 Book Search API

This is a lightweight Express.js REST API built with Sequelize and SQLite to support a **live search** feature on a landing page. It enables real-time filtering and sorting of book data as users type in the frontend.

> ✅ Designed as a technical assignment for the Back-End Developer role at Fobs USA.

---

## 🚀 Features

- 🔍 **Live search** with `title` or `author` filter  
- 📈 Sorting by any column (`title`, `author`, `createdAt`, etc.)  
- 📄 Full CRUD support: Create, Read, Update, Delete books  
- ✅ Input validation using `zod`  
- ⚙️ Easy to deploy (SQLite used for simplicity)

---

## 📦 Technologies

- Node.js + Express.js  
- Sequelize ORM + SQLite  
- Zod for validation  
- RESTful routing

---

## 📁 Project Structure

\`\`\`
├── models/
│   └── Book.js          # Sequelize model
├── routes/
│   └── books.js         # Main API router
├── validators/
│   └── book.js          # Zod schemas for validation
├── middleware/
│   └── validateQuery.js # Custom validation middleware
├── util/
│   └── data.js          # Sample/mock data 
├── server.js            # Server entry point
└── README.md            
\`\`\`

---

## 🧠 API Overview

### `GET /api/books`

Search and sort books live.

**Query Parameters:**

- `q` – Search keyword for title or author  
- `sortBy` – Column to sort by (default: `createdAt`)  
- `order` – Sorting order: `ASC` or `DESC` (default: `DESC`)  

**Example:**

\`\`\`
GET /api/books?q=harry&sortBy=title&order=ASC
\`\`\`

---

### `POST /api/books`

Add a new book.

\`\`\`json
{
  \"title\": \"Atomic Habits\",
  \"author\": \"James Clear\"
}
\`\`\`

---

### `GET /api/books/:id`

Get book by ID.

---

### `PUT /api/books/:id`

Update a book's details.

---

### `DELETE /api/books/:id`

Delete a book.

---

## 🛡️ Validation

Validation is handled by [Zod](https://zod.dev/):

- Search query: checks for valid `q`, `sortBy`, and `order`  
- Book creation & updates: requires `title`, `author`, and optionally `finished`

---

## 📚 Sample Book Schema

\`\`\`js
{
  id: number,
  title: string,
  author: string,
  finished: boolean,
  createdAt: Date,
  updatedAt: Date
}
\`\`\`

---

## ▶️ Running Locally

1. **Install dependencies:**

\`\`\`bash
npm install
\`\`\`

2. **Start the server:**

\`\`\`bash
npm run dev
\`\`\`

Server will run at `http://localhost:3000`.

Swagger at `http://localhost:3000/api-docs/`
---

This backend powers the **live search** experience on a frontend landing page, enabling real-time results filtering and sorting as the user types.

Submitted as part of job application
"
