import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import NavBar from '../NavBar'

const UpdateDetails = () => {
    // const id = localStorage.getItem('id');
    const [employee, setEmployee] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState("");
    const params=useParams();
    const empID=params.id;
    const history = useNavigate();
  
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
  
    const sendRequest = async() =>{
  
      await axios.put(`http://localhost:8000/employee/update/${empID}` , {
    
      empNo:String(employee.empNo),
      empName:String(employee.empName),
      email:String(employee.email),
      empType:String(employee.empType),
      gender:String(employee.gender),
      NIC:String(employee.NIC),
      salary:String(employee.salary),
      address:String(employee.address),
      contactNo:String(employee.contactNo),
      empField:String(employee.empField),
  
  
  
  
    
      }).then(()=>{
    
          Swal.fire({
              title: "Success!",
              text: "Employee Details Updated Successfully",
              icon: 'success',
              timer: 2000,
              button: false,
            });
          
      })
  
  }
  
      const handleSubmit = (e) =>{
        e.preventDefault();
        sendRequest().then(()=>history(`/employeeDetails/${empID}`));
      };
  
      const handleChange =(e)=>{
  
        setEmployee((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
      }
  return (
    <div>
        <NavBar />
    <div className='container-sm '>
      <section className="gradient-custom pt-5">
        <div className="container pt-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                <div className="card-body p-4 p-md-5">
                    <center>
                  <h3 className="mb-3 pb-1 pb-md-0 mb-md-3">Update Employee</h3>
                  </center>
                  <form>
                    <center>
                      <div className="mb-3">
                        <label htmlFor="empNo">
                          <strong>Employee Number</strong>
                        </label>
                        <input
                          type="text"
                          className="form-control rounded-0"
                          autoComplete="off"
                          name="empNo"
                          id='empNo'
                          value={employee.empNo}
                          onChange={handleChange}
                          placeholder="Enter Employee Number"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="empName">
                          <strong>Employee Name</strong>
                        </label>
                        <input
                          type="text"
                          className="form-control rounded-0"
                          autoComplete="off"
                          name="empName"
                          id='empName'
                          value={employee.empName}
                          onChange={handleChange}
                          placeholder="Enter Employee Name"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="email">
                          <strong>Email</strong>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          autoComplete="off"
                          name="email"
                          id='email'
                          value={employee.email}
                          onChange={handleChange}
                          placeholder="Enter Employee Email"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="empType">
                          <strong>Employee Type</strong>
                        </label>
                        <select class="form-select" id="empType" name='empType' onChange={handleChange} required>
                            <option selected disabled>{employee.empType}</option>
                            <option value="emp">Employee</option>
                            <option value="hrmanager">HR Manager</option>
                        </select>
                      </div> 

                      <div className="mb-3">
                        <label htmlFor="empType">
                          <strong>Gender</strong>
                        </label>
                        <select class="form-select" id="gender" name='gender' onChange={handleChange} required>
                            <option selected disabled>{employee.gender}</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                      </div> 
                      
                      <div className="mb-3">
                        <label htmlFor="NIC">
                          <strong>NIC</strong>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          autoComplete="off"
                          name="NIC"
                          id='NIC'
                          value={employee.NIC}
                          onChange={handleChange}
                          placeholder="Enter Employee NIC"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="salary">
                          <strong>Salary</strong>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          autoComplete="off"
                          name="salary"
                          id='salary'
                          value={employee.salary}
                          onChange={handleChange}
                          placeholder="Enter Employee Salary"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="address">
                          <strong>Address</strong>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          autoComplete="off"
                          name="address"
                          id='address'
                          value={employee.address}
                          onChange={handleChange}
                          placeholder="Enter Employee Address"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="contactNo">
                          <strong>Contact Number</strong>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          autoComplete="off"
                          name="contactNo"
                          id='contactNo'
                          value={employee.contactNo}
                          onChange={handleChange}
                          placeholder="Enter Employee Contact Number"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="empField">
                          <strong>Employee Position</strong>
                        </label>
                        <select class="form-select" id="empField" name='empField' onChange={handleChange}  required>
                            <option selected disabled>{employee.empField}</option>
                            <option value="IT">IT</option>
                            <option value="HR">HR</option>
                        </select>
                      </div>

                      <center>
                        <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
                          Submit
                        </button>
                      </center>
                    </center>
                  </form>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </section>      
       
    </div>
    </div>
  )
}

export default UpdateDetails