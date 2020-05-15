import React from "react";

import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import Login from "./components/auth/login";
import Navbar from "./components/menu/Navbar";
import Book from "./components/book/Book";
import EditContact from "./components/editcontact/editContact";
import ContainerCreateNewContact from "./components/book/createnewcontact/containercreate";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <Route
          path="/"
          render={() => <h1>Добро пожаловать на борт!</h1>}
          exact
        />
        <Route path="/auth" component={Login} />
        <Route path="/book" component={Book} />
        <Route path="/create" component={ContainerCreateNewContact} />
        <Route
          path="/profile/:id"
          render={({ match }) => {
            const { id } = match.params;
            return <EditContact itemId={id}/>;
          }}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
