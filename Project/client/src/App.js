import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Attendance from './components/Attendance';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container1">
          <NavBar />
          <Routes>
            <Route path="/attendance" exact element={<Attendance />} />
          </Routes>
          {/* <Footer />  */}

        </div>
      </BrowserRouter>
    )
  }
}
