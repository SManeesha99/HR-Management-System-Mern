import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import AddEmployee from './components/AddEmployee';
import Details from './components/Details';
import EditEmployee from './components/EditEmployee';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container1">
          <NavBar />
          <Routes>
            <Route path="/details" exact element={<Details />} />
            <Route path="/add" exact element={<AddEmployee />} />
            <Route path="/update/:id" exact element={<EditEmployee />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}
