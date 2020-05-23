import React, { useState, useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Books from "./components/Books";
import CreateBook from "./components/CreateBook";
import NotFound from "./components/NotFound";
import BookService from "./services/bookService";
import NavBar from "./components/NavBar";
const App = () => {
  const [authors, setAuthors] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await BookService.getBooks();
      setBooks(result);
    }
    fetchData();
  }, []);
  return (
    <>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/books" component={Books} />
          <Route path="/createbook" component={CreateBook} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/books" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </>
  );
};
export default App;
