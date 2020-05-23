import React, { useState, useEffect } from "react";
import Book from "./Book";
import BookService from "../services/bookService";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState(null);

  useEffect(() => {
    getAllBooks();
  }, []);

  async function getAllBooks() {
    const result = await BookService.getBooks();
    setBooks(result);
  }
  function getBook(id) {
    async function fetchData() {
      const result = await BookService.getBookById(id);
      console.log(result);
      setBook(result);
    }
    fetchData();
  }
  function deleteBook(id) {
    async function fetchData() {
      const result = await BookService.deleteBook(id);
      setBook(null);
      getAllBooks();
    }
    fetchData();
  }
  return (
    <>
      <ul className="list-group">
        {books.map((book) => (
          <li key={book.isbn} className="list-group-item">
            <p>
              <button
                type="button"
                onClick={() => getBook(book._id)}
                className="btn btn-info"
              >
                {book.book_title}
              </button>
              <button
                type="button"
                onClick={() => deleteBook(book._id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </p>
          </li>
        ))}
      </ul>
      {book && <Book book={book} />}
    </>
  );
};
export default Books;
