const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

PORT = process.env.PORT || 5000

app.listen(5000, console.log(`Server started on port ${PORT}`));