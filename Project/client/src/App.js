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
import AttendancePrintPreview from './components/AttendancePrintPreview';
import { Helmet } from "react-helmet";
import MonthlyReport from './components/MonthlyReport';
import RegisterEmployee from './components/RegisterEmployee';
import LoginEmployee from './components/LoginEmployee';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container1">
          <Helmet>
            <title>Sensus Hub</title>
          </Helmet>
          {/* <NavBar /> */}
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/details" exact element={<Details />} />
            <Route path="/add" exact element={<AddEmployee />} />
            <Route path="/update/:id" exact element={<EditEmployee />} />
            <Route path="/register" element={<Register />} />
            <Route path="/registerEmployee" exact element={<RegisterEmployee />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/loginEmployee" exact element={<LoginEmployee />} />
            <Route path="/attendance" exact element={<Attendance />} />
            <Route path="/printAttendancePreview" exact element={<AttendancePrintPreview />} />
            <Route path="/report" exact element={<MonthlyReport />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}
