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
import EmployeeAttendance from './components/EmployeeAttendance';
import AddAttendance from './components/AddAttendance';
import ViewAttendance from './components/MonthlyReport/ViewAttendance';
import CheckOut from './components/CheckOut';
import EmployeeDetails from './components/Employee/EmployeeDetails';
import OwnAttendancce from './components/Employee/OwnAttendancce';
import SingaleEmploye from './components/Employee/SingaleEmploye';
import UpdateEmpDetails from './components/Employee/UpdateEmpDetails';
import UpdateDetails from './components/Employee/UpdateDetails';
import UpdateCheckOut from './components/MonthlyReport/UpdateCheckOut';
import UpdateCheckIn from './components/MonthlyReport/UpdateCheckIn';

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
            <Route path="/login" exact element={<Login />} />
            <Route path="/attendance" exact element={<Attendance />} />
            <Route path="/printAttendancePreview" exact element={<AttendancePrintPreview />} />
            <Route path="/report" exact element={<MonthlyReport />} />
            <Route path="/employeeAttendance" exact element={<EmployeeAttendance />} />
            <Route path="/checkin" exact element={<AddAttendance />} />
            <Route path="/checkout/:id" exact element={<CheckOut />} />
            <Route path="/viewAttendance" exact element={<ViewAttendance />} />
            <Route path="/employeeDetails/:id" exact element={<EmployeeDetails />} />
            <Route path="/ownAttendance" exact element={<OwnAttendancce />} />
            <Route path="/singaleEmploye/:id" exact element={<SingaleEmploye />} />
            <Route path="/updateEmpDetails/:id" exact element={<UpdateEmpDetails />} />
            <Route path="/updateDetails/:id" exact element={<UpdateDetails />} />
            <Route path="/updateCheckOut/:id" exact element={<UpdateCheckOut />} />
            <Route path="/updateCheckIn/:id" exact element={<UpdateCheckIn />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}
