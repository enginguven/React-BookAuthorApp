import React, { useState, useEffect } from "react";
import Joi from "joi-browser";
import BookService from "../services/bookService";
import bookService from "../services/bookService";

const CreateBook = () => {
  const [book, setBook] = useState({});
  const [error, setError] = useState(null);
  const schema = {
    book_title: Joi.string().required().min(5).label("Book Title"),
    publish_date: Joi.string().required().label("Publish Date"),
    isbn: Joi.number().required().min(0).max(100).label("ISBN"),
  };

  const doSubmit = async (e) => {
    e.preventDefault();
    const { error: err } = Joi.validate(book, schema);
    setError(err && err.details[0].message);
    if (!err) {
      try {
        console.log(book);
        const result = await bookService.postBook(book);
        setBook(result);
      } catch (err) {
        setError(err.message);
      }
    }
  };

  function handleChange(e) {
    const tmp = { ...book, [e.target.id]: e.target.value };
    setBook(tmp);
  }

  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="isbnBook">ISBN</label>
          <input
            type="text"
            className="form-control"
            id="isbn"
            placeholder="Enter ISBN"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="titleBook">Book Title</label>
          <input
            type="text"
            className="form-control"
            id="book_title"
            placeholder="Enter Book Title"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="dateBook">Publish Date</label>
          <input
            type="text"
            className="form-control"
            id="publish_date"
            placeholder="Enter Book Publish Date(2019-05-12)"
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={doSubmit} className="btn btn-primary">
          Submit
        </button>
      </form>
      <br />
      {book._id && (
        <div className="card" style={{ width: "30rem" }}>
          <div className="card-body">
            <h5 className="card-title">{book.book_title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Book ISBN={book.isbn}
            </h6>
            <p className="card-text">Publish Date:{book.publish_date}</p>
            <a href="http://localhost:3000/books" className="card-link">
              See All Books
            </a>
          </div>
        </div>
      )}
      {error && (
        <div className="card" style={{ width: "30rem" }}>
          <div className="card-body">
            <h5 className="card-title">{error}</h5>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateBook;
