import axios from "axios";
import { serverUrl } from "../config.json";
const bookEndpoint = serverUrl + "/books";

function bookService() {
  async function getBooks() {
    const result = (await axios.get(bookEndpoint)).data;
    const resultLinks = result.map((book) => {
      book.href = bookEndpoint + "/" + book._id;
      return book;
    });
    return resultLinks;
  }
  async function getBookById(id) {
    const result = await axios.get(bookEndpoint + "/" + id);
    return result.data;
  }
  async function postBook(book) {
    const result = await axios.post(bookEndpoint, book);
    return result.data;
  }
  async function deleteBook(id) {
    const result = await axios.post(bookEndpoint + "/" + id);
    return result.data;
  }
  return {
    getBooks,
    getBookById,
    postBook,
    deleteBook,
  };
}

export default bookService();
