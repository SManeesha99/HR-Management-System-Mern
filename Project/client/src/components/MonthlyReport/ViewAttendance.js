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
                                                    {/* <th scope='col'>Emp Name</th> */}
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
                                                        {/* <td>{entry.empName}</td> */}
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

