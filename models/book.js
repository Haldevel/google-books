const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  thumbnail: { type: String, default: "https://via.placeholder.com/150" }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
