import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import './css/details.css';
import NavBar from './NavBar';

const  Details = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        const getEmployee = async () => {
            await axios.get('http://localhost:8000/employee/').then((res) => {
                setEmployee(res.data);
                console.log(res.data);
            }).catch((error) => {
                console.log(error);
            });
        }
        getEmployee();
    },[]);

    const filterEmployee = employee.filter((employee) => {
        if (employee.empNo && employee.empName) {
          return (
            employee.empNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee.empName.toLowerCase().includes(searchTerm.toLowerCase())
          );
        } else {
          return false; 
        }
      });
      

    // const params = useParams();
    // const [employee, setEmployee] = useState([]);
    

    // useEffect(() => {
    //     retrievePosts();
    // }, []);

    // const retrievePosts = () => {
    //     axios.get('http://localhost:8000/employee/').then((res) => {
    //         if (res.data.success) {
    //             setEmployee(res.data.existingPosts);
    //         }
    //     });
    // };

    // const onDelete = (id) => {
    //     Swal.fire({
    //         title: 'Are you sure you want to delete this?',
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#FFB400',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!',
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             axios.delete(`/employee/post/${id}`).then((res) => {
    //                 Swal.fire('Deleted!', 'Employee has been deleted.', 'success');
    //                 retrievePosts();
    //             });
    //         }
    //     });
    // };

    

    return (
        <div>
            <NavBar/>
            <div className='mt-5'>
                <div className='container3'>
                    <div className='add_btn mt-2 mb-2'></div>
                    <section className='main'>
                        <div className='main-top'>
                            <h1>Employee List</h1>
                        </div>
                        <label className='mt-3'>Search Employee</label>
                        <div className="col-5 mt-1">
                            <input
                                type="text"
                                placeholder="Search Employee"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <table className='table' id='EmployeeTable'>
                            <thead>
                                <tr >
                                    <th scope='col'>No.</th>
                                    <th scope='col'>Emp No.</th>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>NIC</th>
                                    <th scope='col'>Gender</th>
                                    <th scope='col'>Type</th>
                                    <th scope='col'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterEmployee.map((emp, index) => (
                                    <tr key={index}>
                                        <th scope='row'>{index + 1}</th>
                                        <th scope='row'><a href={`/employeeDetails/${emp._id}`} style={{ textDecoration:'none', color:'black' }}>{emp.empNo}</a></th>
                                        <td><a href={`/employeeDetails/${emp._id}`} style={{ textDecoration:'none', color:'black' }}>{emp.empName}</a></td>
                                        <td>{emp.email}</td>
                                        <td>{emp.NIC}</td>
                                        <td>{emp.gender}</td>
                                        <td>{emp.empType}</td>
                                         
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <a href='/add'>
                            <button className='btn' type='submit'>
                                Add Employee
                            </button>
                        </a>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Details;
