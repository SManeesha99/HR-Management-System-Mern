import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faHand,faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import './css/navbar.css';

const EmpSideNav = () => {
    
    const handleEmployeeDetailsClick = () => {
        const employeeId = localStorage.getItem('id');
        if (employeeId) {
            window.location.href = `/singaleEmploye/${employeeId}`;
        }
    };

    const handleSignout = () => {
        localStorage.clear();
        window.location.href = '/login';
    };

    const handleRequestLeaves = () =>{
        const employeeId = localStorage.getItem('id');
        if(employeeId){
            window.location.href = `/employee/leave/${employeeId}`;
        }
    }
  return (
<div className="sidebar">
            <img src="../images/logo.png" alt="Logo" className="sidebar-logo" />

            <ul className="sidebar-nav">
                <li className="sidebar-item">
                    <a href="/ownAttendance" className="sidebar-link">
                        <FontAwesomeIcon icon={faHome} className="icon" /> Home
                    </a>
                </li>
                <li className="sidebar-item">
                    <a href='#' className="sidebar-link" onClick={handleEmployeeDetailsClick}>
                        <FontAwesomeIcon icon={faUser} className="icon" /> Employee Details
                    </a>
                </li>

                <li className="sidebar-item">
                    <a href='#' className="sidebar-link" onClick={handleRequestLeaves}>
                        <FontAwesomeIcon icon={faHand} className="icon" /> Request Leaves
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
  )
}

export default EmpSideNav;