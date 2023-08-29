import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import EmpSideNav from './EmpSideNav';

const CheckOut = () => {
    
    const [attendance, setAttendance] = useState({});
    const [newCheckOut, setNewCheckOut] = useState('');
    const params = useParams();
    const attendanceID = params.id;

    useEffect(() => {
        const currentDate = new Date();
        const formattedTime = currentDate.toTimeString().slice(0, 5);
        setNewCheckOut(formattedTime);

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
                `http://localhost:8000/attendance/${attendanceID}/checkout`,
                { checkOut: newCheckOut }
            );

            if (response.status === 200) {
                // Update local attendance state with the new check-out time
                const updatedAttendance = { ...attendance };
                updatedAttendance.attendance[0].checkOut = newCheckOut;
                setAttendance(updatedAttendance);
                window.location.href = '/ownAttendance';
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div>
            <EmpSideNav />

            <div>
                <div className='py-5'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-md-5'>
                                <div className='card'>
                                    <div className='card-header'>
                                        <h3>Add Daily CheckOut</h3>
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
                                            <div className='form-group'>
                                                <label htmlFor='date'>Date</label>
                                                <input
                                                    type='text'
                                                    id='date'
                                                    value={new Date(attendance.attendance?.[0]?.date).toLocaleDateString()}
                                                    className='form-control'
                                                    readOnly
                                                />
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='checkOut'>Check-Out</label>
                                                <div className='d-flex align-items-center justify-content-center'>
                                                    <input
                                                        type='time'
                                                        id='checkOut'
                                                        value={newCheckOut}
                                                        onChange={(e) => setNewCheckOut(e.target.value)}
                                                        className='form-control'
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <button type='submit' className='btn btn-primary mt-3' onClick={handleSubmit}>
                                                Submit
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
};

export default CheckOut;
