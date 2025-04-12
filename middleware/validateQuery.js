
const validateQuery = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.query);

  if (!result.success) {
    return res.status(400).json({
      error: "Invalid query parameters",
      details: result.error.flatten(),
    });
  }

  req.query = result.data;
  next();
};


const validateBook = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      error: "Validation failed",
      details: result.error.flatten(),
    });
  }

  req.body = result.data;
  next();
};


module.exports = {validateBook,validateQuery};