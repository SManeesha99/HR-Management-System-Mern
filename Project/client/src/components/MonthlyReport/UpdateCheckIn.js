import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../NavBar';

const UpdateCheckIn = () => {
    const [attendance, setAttendance] = useState({});
    const [newCheckIn, setNewCheckIn] = useState('');
    const params = useParams();
    const attendanceID = params.id;

    useEffect(() => {

        const getOneAttendance = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/attendance/${attendanceID}`);
                setAttendance(response.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        getOneAttendance();
    }, [attendanceID]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(
                `http://localhost:8000/attendance/${attendanceID}/checkin`,
                { checkIn: newCheckIn }
            );

            if (response.status === 200) {
                const updatedAttendance = { ...attendance };
                updatedAttendance.attendance[0].checkIn = newCheckIn;
                setAttendance(updatedAttendance);
                window.location.href = '/viewAttendance';
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div>
            <NavBar />

            <div>
                <div className='py-5'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-md-5'>
                                <div className='card'>
                                    <div className='card-header'>
                                        <h3>Add Daily OFF</h3>
                                    </div>
                                    <div className='card-body text-center'>
                                        <form>
                                            <div className='form-group'>
                                                <label htmlFor='empNo'>Employee No</label>
                                                <input
                                                    type='text'
                                                    id='empNo'
                                                    value={attendance.empNo}
                                                    className='form-control'
                                                    readOnly
                                            />
                                            </div>
                                            {/* <div className='form-group'>
                                                <label htmlFor='date'>Date</label>
                                                <input
                                                    type='text'
                                                    id='date'
                                                    value={new Date(attendance.attendance?.[0]?.date).toLocaleDateString()}
                                                    className='form-control'
                                                    readOnly
                                            />
                                            </div> */}
                                            <div className='form-group'>
                                                <label htmlFor='checkOut'>ON Time</label>
                                                <div className='d-flex align-items-center justify-content-center'>
                                                    <input
                                                        type='time'
                                                        id='checkOut'
                                                        value={newCheckIn}
                                                        onChange={(e) => setNewCheckIn(e.target.value)}
                                                        className='form-control'
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary mt-3"  onClick={handleSubmit}>
                                                ON
                                            </button>
                                        </form>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateCheckIn