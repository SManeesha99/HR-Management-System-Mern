import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import AddEmployee from './components/AddEmployee';
import Details from './components/Details';
import EditEmployee from './components/EditEmployee';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Attendance from './components/Attendance';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container1">
          <NavBar />
          <Routes>
          <Route path="/" exact element={<Home />} />
            <Route path="/details" exact element={<Details />} />
            <Route path="/add" exact element={<AddEmployee />} />
            <Route path="/update/:id" exact element={<EditEmployee />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/attendance" exact element={<Attendance />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}
