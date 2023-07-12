// Importing the module mongoose
const mongoose = require("mongoose");
// Insert the mongodb
var url = "mongodb://localhost:27017/booksDB";

const connection = mongoose.createConnection(url);

module.exports = connection;
