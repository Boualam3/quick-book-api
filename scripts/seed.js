
const sequelize = require("../config/database");
const Book = require("../models/Book");

const seedBooks = async () => {
  await sequelize.sync({ force: true }); // reset DB

  await Book.bulkCreate([
    {
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      finished: true,
    },
    { title: "Clean Code", author: "Robert C. Martin", finished: false },
    {
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      finished: true,
    },
    { title: "Design Patterns", author: "Erich Gamma", finished: false },
    { title: "You Don’t Know JS", author: "Kyle Simpson", finished: true },
  ]);

  console.log("✅ Books seeded!");
  process.exit();
};

seedBooks().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
