require("dotenv").config();
require("./app/database");
const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`App Started on Port ${PORT}!`));

//