require("dotenv").config();
require("./app/database");
const express = require("express");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.use(routes);

const server = app.listen(PORT, () =>
  console.log(`App Started on Port ${PORT}!`)
);

module.exports = server;