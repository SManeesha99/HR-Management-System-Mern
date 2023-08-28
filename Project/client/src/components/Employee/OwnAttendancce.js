import EmpSideNav from '../EmpSideNav'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OwnAttendancce = () => {
    const empNo = localStorage.getItem("empNo");
    const [attendance, setAttendance] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');


    useEffect(()=>{
        const getOwnAttendance = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/attendance/own/${empNo}`);
                setAttendance(response.data);
            } catch (error) {
                console.error(error.message);
            }
        };
    
        getOwnAttendance();
    }, [empNo]);

      const filteredAttendance = attendance.filter((entry) => {
        const entryDate = new Date(entry.attendance[0].date);
        const startDateObj = new Date(startDate);
        const endDateObj = new Date(endDate);

        const isDateInRange =
            (!startDate || entryDate >= startDateObj) &&
            (!endDate || entryDate <= endDateObj);

        if (searchTerm === "") {
            return isDateInRange;
        } else {
            return (
                isDateInRange &&
                entry.empNo.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
    });


  return (
    <div>
        <EmpSideNav />
        <div className='py-5'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Filter Attendance</h4>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <div className="row mb-3">
                                            <div className="col">
                                            <label htmlFor="startDate">From Date</label>
                                                <input
                                                    type="date"
                                                    value={startDate}
                                                    onChange={(e) => setStartDate(e.target.value)}
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="col">
                                            <label htmlFor="enddate">End Date</label>
                                                <input
                                                    type="date"
                                                    value={endDate}
                                                    onChange={(e) => setEndDate(e.target.value)}
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <table className="table table-striped table-sm">
                                            <thead>
                                                <tr>
                                                    <th scope="col">No</th>
                                                    <th scope="col">EmpNo</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">CheckIn</th>
                                                    <th scope="col">CheckOut</th>
                                                    <th scope="col">Type</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {filteredAttendance.map((entry, index) => {
                                                const checkInTime = entry.attendance[0].checkIn;
                                                const checkOutTime = entry.attendance[0].checkOut;

                                                let type = "Absent"; // Default type
                                                if (
                                                    (checkInTime <= "08:30" && checkOutTime >= "17:30") ||
                                                    (checkInTime <= "08:30" && checkOutTime >= "17:30")
                                                ) {
                                                    type = "Present";
                                                } else if (
                                                    (checkInTime <= "12:30" && checkOutTime >= "17:30") ||
                                                    (checkInTime <= "08:30" && checkOutTime >= "17:30")
                                                ) {
                                                    type = "Halfday";
                                                } else if (
                                                    (checkInTime <= "08:30" && checkOutTime <= "12:30") ||
                                                    (checkInTime <= "17:30" && checkOutTime <= "17:30")
                                                ) {
                                                    type = "Short Leave";
                                                }

                                                return (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{entry.empNo}</td>
                                                        <td>{new Date(entry.attendance[0].date).toISOString().split('T')[0]}</td>
                                                        <td>{checkInTime}</td>
                                                        <td>{checkOutTime}</td>
                                                        <td>{type}</td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>

                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default OwnAttendancce