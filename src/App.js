import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Login from './components/auth/login';
import Navbar from './components/menu/Navbar';
import Book from './components/book/Book';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar/>
        <Route path='/auth' component={Login}/>
        <Route path='/book' component={Book}/>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
