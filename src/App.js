import React from "react";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import EditContact from "./components/book/editcontact/EditContact";
import ContainerCreateNewContact from "./components/book/createnewcontact/ContainerCreate";
import Contacts from "./components/book/Contacts";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Route path="/" component={Contacts} exact />
        <Route path="/create" component={ContainerCreateNewContact} />
        <Route
          path="/user/:id"
          render={({ match }) => {
            const { id } = match.params;
            return <EditContact itemId={id} />;
          }}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
