import axios from "axios";

export default {
  // Gets all books from the heroku server
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  searchBook: function(search) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search);
  },
  // Deletes the book with the given id on our heroku hosted server
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id); 
  },
  // Saves a book to the database on the heroku server
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
