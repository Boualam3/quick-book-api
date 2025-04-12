var express = require("express"),
  bodyParser = require("body-parser"),
  swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("./swagger/swagger.json");



const app = express();
// const specs = swaggerJsdoc(options);

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(bodyParser.json());
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, { explorer: true })
);

app.use("api/books", require("./routes/books"));

const PORT = process.env.PORT || 3000;
app.listen(PORT);

console.debug("Server listening on port: " + PORT);
