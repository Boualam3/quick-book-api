
const { z } = require("zod");

const bookQuerySchema = z.object({
  q: z.string().optional(),
  sortBy: z.enum(["createdAt", "title", "finished"]).optional(), // only 'createdAt', 'title'
  order: z.enum(["ASC", "DESC"]).optional(), // only ASC or DESC
});

 const createBookSchema = z.object({
   title: z.string().min(3, "Title is required"),
   author: z.string().min(3, "Author is required"),
   finished: z.boolean().optional(),
 });

module.exports = { bookQuerySchema, createBookSchema };
