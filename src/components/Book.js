import React, { Component, useState, useEffect } from "react";

const Book = ({ book }) => {
  return (
    <div className="card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">{book.book_title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Book ISBN={book.isbn}</h6>
        <p className="card-text">Publish Date:{book.publish_date}</p>
        <a href="#" className="card-link">
          Authors link
        </a>
      </div>
    </div>
  );
};

export default Book;
