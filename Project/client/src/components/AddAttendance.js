import React, { useState , useEffect  } from 'react';
import axios from 'axios';
import EmpSideNav from './EmpSideNav'

const AddAttendance = () => {

     const [empNo, setEmpNo] = useState('');
     const [empName, setEmpName] = useState('');
    const [date, setDate] = useState('');
    const [checkIn, setCheckIn] = useState('');

    useEffect(() => {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split('T')[0];
        const formattedTime = currentDate.toTimeString().slice(0, 5);

        setDate(formattedDate);
        setCheckIn(formattedTime);

        // Retrieve empNo from local storage
        const storedEmpName = localStorage.getItem('empName');
        if (storedEmpName) {
            setEmpName(storedEmpName);
        }
        const storedEmpNo = localStorage.getItem('empNo');
        if (storedEmpNo) {
            setEmpNo(storedEmpNo);
        }
    }, []);

    const handleRecordAttendance = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/attendance/add', {
                empNo,
                attendance: [{ date, checkIn }]
            });

            alert('Attendance recorded:', response.data);
            window.location.href = '/ownAttendance';
        } catch (error) {
            console.error('Error recording attendance:', error);
        }
    };

    return (
        <div>
            <EmpSideNav />
            <div className='py-5'>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-5">
                <div className="card">
                    <div className="card-header">
                        <h3>Add Daily ON</h3>
                    </div>
                    <div className="card-body text-center">
                        <form onSubmit={handleRecordAttendance}>
                        <div className="form-group">
                                <label htmlFor="empName">Employee Name</label>
                                <input
                                    type="text"
                                    id="empName"
                                    value={empName}
                                    onChange={(e) => setEmpName(e.target.value)}
                                    className="form-control"
                                    required
                                />
                            </div>
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
                            <div className="form-group">
                                <label htmlFor="checkIn">ON Time</label>
                                <div className="d-flex align-items-center justify-content-center">
                                    <input
                                        type="time"
                                        id="checkIn"
                                        value={checkIn}
                                        onChange={(e) => setCheckIn(e.target.value)}
                                        className="form-control"
                                        required
                                    />
                                    {/* <button type="button" className="btn btn-primary ml-3">ON</button> */}
                                </div>
                            </div>
                            {/* <div className="form-group">
                                <label htmlFor="checkOut">Check-Out</label>
                                <div className="d-flex align-items-center justify-content-center">
                                    <input
                                        type="time"
                                        id="checkOut"
                                        value={checkOut}
                                        onChange={(e) => setCheckOut(e.target.value)}
                                        className="form-control"
                                        required
                                    />
                                    <button type="button" className="btn btn-danger ml-3" style={{ backgroundColor:'red' }}>OFF</button>
                                </div>
                            </div> */}
                            <button type="submit" className="btn btn-primary mt-3">
                                ON
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
        </div>
        
    );
};

export default AddAttendance;
