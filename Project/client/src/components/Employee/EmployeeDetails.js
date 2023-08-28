import React, {useEffect} from 'react'
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import NavBar from '../NavBar';

const EmployeeDetails = () => {

    const [employee, setEmployee] = React.useState({});
    const params = useParams();
    const empID = params.id;

    useEffect(()=>{
        const getOneEmployee = async () => {
          await axios.get(`http://localhost:8000/employee/${empID}`).then((res) => {
            setEmployee(res.data);
          }).catch((err) => {
              console.log(err.massage);
          }) 
      }
      getOneEmployee();
    },[])



  return (
    <div>
        <NavBar />
        <div className="container mt-4">
        <div className="card">
          <div className="card-header">
            <h2>Employee Details</h2>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <h3>Personal Information</h3>
                <p><strong>Name:</strong><p className='form-control'>{employee.empName}</p></p>
                <p><strong>Email:</strong><p className='form-control'> {employee.email}</p></p>
                <p><strong>Gender:</strong><p className='form-control'> {employee.gender}</p></p>
                <p><strong>NIC:</strong> <p className='form-control'>{employee.NIC}</p></p>
              </div>
              <div className="col-md-6">
                <h3>Job Details</h3>
                <p><strong>Employee Number:</strong><p className='form-control'> {employee.empNo}</p></p>
                <p><strong>Employee Type:</strong> <p className='form-control'>{employee.empType}</p></p>
                <p><strong>Salary:</strong> <p className='form-control'>Rs.{employee.salary}</p></p>
                <p><strong>Position:</strong> <p className='form-control'>{employee.empField}</p></p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-6">
                <h3>Contact Information</h3>
                <p><strong>Address:</strong> <p className='form-control'>{employee.address}</p></p>
                <p><strong>Contact Number:</strong> <p className='form-control'>{employee.contactNo}</p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeDetails