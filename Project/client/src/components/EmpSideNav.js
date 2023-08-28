import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCalendar, faList } from '@fortawesome/free-solid-svg-icons';
import './css/navbar.css';

const EmpSideNav = () => {
  return (
<div className="sidebar">
            <img src="../images/logo.png" alt="Logo" className="sidebar-logo" />

            <ul className="sidebar-nav">
                <li className="sidebar-item">
                    <a href="/ownAttendance" className="sidebar-link">
                        <FontAwesomeIcon icon={faHome} className="icon" /> Home
                    </a>
                </li>
            </ul>
        </div>
  )
}

export default EmpSideNav;