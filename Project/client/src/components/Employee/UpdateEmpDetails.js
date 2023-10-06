import React, { useEffect, useState } from 'react'
import { NavLink,Link,useParams,useNavigate } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';
import EmpSideNav from '../EmpSideNav'


const UpdateEmpDetails = () => {

  const id = localStorage.getItem('id');
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
      sendRequest().then(()=>history(`/singaleEmploye/${empID}`));
    };

    const handleChange =(e)=>{

      setEmployee((prevState)=>({
          ...prevState,
          [e.target.name]:e.target.value,
      }))
    }

  return (
    <div>
      <EmpSideNav/>
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
                          readOnly
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
                          readOnly
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="empType">
                          <strong>Employee Type</strong>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          autoComplete="off"
                          name="empType"
                          id='empType'
                          value={employee.empType}
                          onChange={handleChange}
                          placeholder="Enter Employee Email"
                          readOnly
                        />
                      </div> 

                      <div className="mb-3">
                        <label htmlFor="empType">
                          <strong>Gender</strong>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          autoComplete="off"
                          name="gender"
                          id='gender'
                          value={employee.gender}
                          onChange={handleChange}
                          placeholder="Enter Employee Email"
                          readOnly
                        />
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
                          readOnly
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
                          readOnly
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
                        <input
                          type="text"
                          className="form-control"
                          autoComplete="off"
                          name="empField"
                          id='empField'
                          value={employee.empField}
                          onChange={handleChange}
                          readOnly
                        />
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

export default UpdateEmpDetails