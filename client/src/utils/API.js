import axios from "axios";



export default {
  // Gets all books
  getArticles: function(query) {
    return axios.get("/api/articles", {params: { q: query
    }
  });
  },
  // // Gets the book with the given id
  // getArticles: function(id) {
  //   return axios.get("/api/articles/" + id);
  // },
  // // Deletes the book with the given id
  // deleteArticles: function(id) {
  //   return axios.delete("/api/articles/" + id);
  // },
  // // Saves a book to the database
  // saveArticles: function(articleData) {
  //   return axios.post("/api/articles", articleData);
  // }
};
