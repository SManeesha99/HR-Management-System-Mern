import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';

function Attendance() {
    const params = useParams();
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        retrievePosts();
    }, []);

    const retrievePosts = () => {
        axios.get("/employee/post").then(res => {
            if (res.data.success) {
                setEmployee(res.data.existingPosts);
                console.log(employee);
            }
        });
    }

    return (
        <div>
            <div className='mt-5'>
                <div className="container3">
                    <div className="add_btn mt-2 mb-2"></div>
                    <section class="main">
                        <div class="main-top">
                            <h1>Employee List</h1>
                        </div>
                        <table class="table" id="EmployeeTable">
                            <thead>
                                <th scope="col" >No.</th>
                                <th scope="col" >Name</th>
                                <th scope="col" >Attendance</th>
                            </thead>
                            <tbody>
                                {employee.map((employee, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{employee.name}</td>
                                        <td>{employee.attendance}</td>
                                        <center>
                                            <td>
                                                <a href={`/update/${employee._id}`} className="btn-edit">Update</a>
                                            </td>
                                            
                                        </center>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Attendance;