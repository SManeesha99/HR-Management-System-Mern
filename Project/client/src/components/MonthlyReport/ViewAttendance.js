import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import NavBar from '../NavBar';
import '../css/attendance.css';

const ViewAttendance = () => {
    const [attendance, setAttendance] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    useEffect(() => {
        const loadAttendance = async () => {
            try {
                const result = await axios.get('http://localhost:8000/attendance');
                setAttendance(result.data.reverse());
            } catch (error) {
                console.error("Error fetching attendance:", error);
            }
        };
        loadAttendance();
    }, []);

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

    const handleGenerateReport = () => {
        const filteredData = filteredAttendance.map((entry) => {
            return {
                EmpNo: entry.empNo,
                Date: new Date(entry.attendance[0].date).toISOString().split('T')[0],
                CheckIn: entry.attendance[0].checkIn,
                CheckOut: entry.attendance[0].checkOut,
            };
        });

        const worksheet = XLSX.utils.json_to_sheet(filteredData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Attendance Report');
        XLSX.writeFile(workbook, 'Attendance_Report.xlsx');
    };

    return (
        <div>
            <NavBar/>
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
                                            <div className="col">
                                            <label htmlFor="empNo">EMP No</label>
                                                <input
                                                    type="text"
                                                    placeholder="Search by EmpNo"
                                                    value={searchTerm}
                                                    onChange={(e) => setSearchTerm(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <table className="table table-striped table-sm">
                                            <thead>
                                                <tr>
                                                    <th scope="col">No</th>
                                                    <th scope="col">EmpNo</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">On</th>
                                                    <th scope="col">Off</th>
                                                    <th scope="col">Type</th>
                                                    <th scope="col">Working Hours</th>
                                                    <th scope="col">Ot Hours</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {filteredAttendance.map((entry, index) => {
                                                    const checkInTime = entry.attendance[0].checkIn;
                                                    const checkOutTime = entry.attendance[0].checkOut;

                                                    let type = "Pending";
                                                    let workingHours = ""; 
                                                    let ot = "";

                                                    if (!checkOutTime) {
                                                        type = "Pending";
                                                    } else {
                                                        const checkIn = new Date(`2000-01-01 ${checkInTime}`);
                                                        const checkOut = new Date(`2000-01-01 ${checkOutTime}`);
                                                        const timeDifference = checkOut - checkIn;
                                                        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
                                                        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                                                        workingHours = `${hours}h ${minutes}m`;

                                                        if (hours >= 9) {
                                                            type = "Full day";
                                                            if(hours > 8) {
                                                                ot = `${hours - 8}h ${minutes}m`;
                                                            }
                                                        } else if (hours >= 4 && hours < 8) {
                                                            type = "Halfday";
                                                        } else {
                                                            type = "Short Leave";
                                                        }
                                                    }

                                                    return (
                                                        <tr key={index}>
                                                            <td>{index + 1}</td>
                                                            <td>{entry.empNo}</td>
                                                            <td>{new Date(entry.attendance[0].date).toISOString().split('T')[0]}</td>
                                                            <td><a href={`/updateCheckIn/${entry._id}`} style={{ textDecoration:'none', color:'black' }}>{checkInTime}</a></td>
                                                            <td><a href={`/updateCheckOut/${entry._id}`} style={{ textDecoration:'none', color:'black' }}>{checkOutTime || '00.00'}</a></td>
                                                            <td>
                                                            {type === "Full day" && (
                                                                <span className="badge badge-primary" style={{ backgroundColor:'#80ff80', color:'black' }}>{type}</span>
                                                            )}
                                                            {type === "Halfday" && (
                                                                <span className="badge badge-warning" style={{ backgroundColor:'#ffff99', color:'black' }}>{type}</span>
                                                            )}
                                                            {type === "Short Leave" && (
                                                                <span className="badge badge-danger" style={{ backgroundColor:'#80bfff', color:'black' }}>{type}</span>
                                                            )}
                                                            {type === "Pending" && (
                                                                <span className="badge badge-secondary" style={{ backgroundColor:'red' , color:'white' }}>{type}</span>
                                                            )}
                                                        </td>
                                                            <td>{workingHours}</td> 
                                                            <td>{ot}</td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>

                                    </div>
                                    <div className="row mt-3">
                                        <div className="col text-center">
                                            <button className="btn btn-primary" onClick={handleGenerateReport}>
                                                Generate Excel Report
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewAttendance;

