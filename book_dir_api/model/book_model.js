const mongoose = require("mongoose"); // Import mongoose
const db = require("../config/db");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "----",
  },
  author: {
    type: String,
    default: "----",
  },
});

const bookmodel = db.model("books", bookSchema);

module.exports = bookmodel;