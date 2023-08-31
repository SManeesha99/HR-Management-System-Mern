import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCalendar, faList, faArrowAltCircleDown, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import './css/navbar.css';

export default function Sidebar() {
    const handleSignout = () => {
        localStorage.clear();
        window.location.href = '/login';
    };
    return (
        <div className="sidebar">
            <img src="../images/logo.png" alt="Logo" className="sidebar-logo" />

            <ul className="sidebar-nav">
                <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                        <FontAwesomeIcon icon={faHome} className="icon" /> Home
                    </a>
                </li>
                <li className="sidebar-item">
                    <a href="/details" className="sidebar-link">
                        <FontAwesomeIcon icon={faUser} className="icon" /> Employee Details
                    </a>
                </li>
                {/* <li className="sidebar-item">
                    <a href="/attendance" className="sidebar-link">
                        <FontAwesomeIcon icon={faCalendar} className="icon" /> Employee Attendance
                    </a>
                </li> */}
                <li className="sidebar-item">
                    <a href="/viewAttendance" className="sidebar-link">
                        <FontAwesomeIcon icon={faList} className="icon" /> View Attendance
                    </a>
                </li>
            </ul>

            <div className="sidebar-item">
                <ul className="sidebar-nav">
                    <li className="sidebar-item">
                            <a  className="sidebar-link" onClick={handleSignout}>
                                <FontAwesomeIcon icon={faArrowAltCircleLeft} className="icon" /> Sign Out
                            </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
