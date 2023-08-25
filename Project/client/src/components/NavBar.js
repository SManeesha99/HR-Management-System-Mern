import React from 'react'
import './css/navbar.css';

export default function Navbar() {
    return (
        <div>



<nav class="navbar navbar-expand-lg">
        <div class="container">
           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <img src="../images/logo.png"  width="70" height="70"/>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/details">Employee Details</a>
              </li> 
              <li class="nav-item">
                <a class="nav-link" href="/attendance">Employee Attendance</a>
              </li> 
              <li class="nav-item">
                <a class="nav-link" href="/viewAttendance">View Attendance</a>
              </li> 
             
              
              
                     
            </ul>
          </div>
        </div>
      </nav>


        </div>
    )
}

