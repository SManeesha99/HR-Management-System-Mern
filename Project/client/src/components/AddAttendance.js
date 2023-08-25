import React, { useState } from 'react';
import axios from 'axios';

const AddAttendance = () => {
    const [empNo, setEmpNo] = useState('');
    const [date, setDate] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');

    const handleRecordAttendance = async (e) => {
        e.preventDefault(); 
        try {
            const response = await axios.post('http://localhost:8000/attendance/add', {
                empNo,
                attendance: [{ date, checkIn, checkOut }]
            });

            alert('Attendance recorded:', response.data);
        } catch (error) {
            console.error('Error recording attendance:', error);
        }
    };

    return (
        <div className='py-5'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Add Daily Attendance</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleRecordAttendance}>
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="form-group">
                                                <label htmlFor="empNo">Employee No</label>
                                                <input
                                                    type="text"
                                                    id="empNo"
                                                    value={empNo}
                                                    onChange={(e) => setEmpNo(e.target.value)}
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="form-group">
                                                <label htmlFor="date">Date</label>
                                                <input
                                                    type="date"
                                                    id="date"
                                                    value={date}
                                                    onChange={(e) => setDate(e.target.value)}
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="form-group">
                                                <label htmlFor="checkIn">Check-In</label>
                                                <input
                                                    type="time"
                                                    id="checkIn"
                                                    value={checkIn}
                                                    onChange={(e) => setCheckIn(e.target.value)}
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="form-group">
                                                <label htmlFor="checkOut">Check-Out</label>
                                                <input
                                                    type="time"
                                                    id="checkOut"
                                                    value={checkOut}
                                                    onChange={(e) => setCheckOut(e.target.value)}
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-3">
                                        Submit
                                    </button>
                                </form>
                                <hr />
                                {/* <button type="button" className="btn mt-3">
                                    <a href='/viewAttendance' style={{ decoration:'none' }}>View Attendance</a>
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAttendance;
