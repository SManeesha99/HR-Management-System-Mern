import React from 'react';
import './css/navbar.css'; 

export default function Sidebar() {
    return (
        <div className="sidebar">
            <img src="../images/logo.png" alt="Logo" className="sidebar-logo" />

            <ul className="sidebar-nav">
                <li className="sidebar-item">
                    <a href="/" className="sidebar-link">Home</a>
                </li>
                <li className="sidebar-item">
                    <a href="/details" className="sidebar-link">Employee Details</a>
                </li>
                <li className="sidebar-item">
                    <a href="/attendance" className="sidebar-link">Employee Attendance</a>
                </li>
                <li className="sidebar-item">
                    <a href="/viewAttendance" className="sidebar-link">View Attendance</a>
                </li>
            </ul>
        </div>
    );
}
