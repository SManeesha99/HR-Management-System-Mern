import React, { useState } from "react";
// import "./css/form.css";
import axios from "axios";
import NavBar from "./NavBar";
import Swal from "sweetalert2";


const AddEmployee = () => {
  
  const [empNo, setEmpNo] = useState("");
  const [empName, setEmpName] = useState("");
  const [email, setEmail] = useState("");
  const [empType, setEmpType] = useState("");
  const [gender, setGender] = useState("");
  const [NIC, setNIC] = useState("");
  const [salary, setSalary] = useState("");
  const [address, setAddress] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [empField, setEmpField] = useState("");

  function sendData(e){
    e.preventDefault();
    const newEmployee = {
      empNo,
      empName,
      email,
      empType,
      gender,
      NIC,
      salary,
      address,
      contactNo,
      empField,
    }

    if(empNo =='' && empName == '' && email =='' && empType =='' && gender ==''&& NIC =='' && salary =='' && address =='' && contactNo =='' && empField ==''){
      Swal.fire("All Fields are empty");
    }
    else if(empNo ==''){
      Swal.fire("Employee No Fields is empty");
    }
    else if(empName ==''){
      Swal.fire("Employee Name Fields is empty");
    }
    else if(email ==''){
      Swal.fire("Email Fields is empty");
    }
    else if(empType ==''){
      Swal.fire("Type Fields is empty");
    }
    else if(gender ==''){
      Swal.fire("Gender Fields is empty");
    }
    else if(NIC ==''){
      Swal.fire("NIC Fields is empty");
    }
    else if(salary ==''){
      Swal.fire("Salary Fields is empty");
    }
    else if(address ==''){
      Swal.fire("Address Fields is empty");
    }
    else if(contactNo ===''){
      Swal.fire("Contact Number Fields is empty");
    }
    else if(empField ===''){
      Swal.fire("Employee Field Fields is empty");
    }else{
      axios.post("http://localhost:8000/employee/add", newEmployee).then(()=>{
        Swal.fire({
          title: "Success!",
          text: "Employee Added Successfully",
          icon: 'success',
          timer: 2000,
          button: false,
          });
          const timer = setTimeout(() => {
            window.location.reload();
          }, 2000);
      }).catch((e)=>{
        alert(e);
      })
    }
    


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
                  <h3 className="mb-3 pb-1 pb-md-0 mb-md-3">Add Employee</h3>
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
                          placeholder="Enter Employee Number"
                          onChange={(e) => (setEmpNo(e.target.value))}
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
                          placeholder="Enter Employee Name"
                          onChange={(e) => (setEmpName(e.target.value))}
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
                          placeholder="Enter Employee Email"
                          onChange={(e) => (setEmail(e.target.value))}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="empType">
                          <strong>Employee Type</strong>
                        </label>
                        <select class="form-select" id="empType" onChange={(e) => (setEmpType(e.target.value))} required>
                            <option selected disabled>Select Employee Type</option>
                            <option value="emp">Employee</option>
                            <option value="hrmanager">HR Manager</option>
                        </select>
                      </div> 

                      <div className="mb-3">
                        <label htmlFor="empType">
                          <strong>Gender</strong>
                        </label>
                        <select class="form-select" id="gender" onChange={(e) => (setGender(e.target.value))} required>
                            <option selected disabled>Select Gender</option>
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
                          placeholder="Enter Employee NIC"
                          onChange={(e) => (setNIC(e.target.value))}
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
                          placeholder="Enter Employee Salary"
                          onChange={(e) => (setSalary(e.target.value))}
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
                          placeholder="Enter Employee Address"
                          onChange={(e) => (setAddress(e.target.value))}
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
                          placeholder="Enter Employee Contact Number"
                          onChange={(e) => (setContactNo(e.target.value))}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="empField">
                          <strong>Employee Position</strong>
                        </label>
                        <select class="form-select" id="empField" onChange={(e) => (setEmpField(e.target.value))} required>
                            <option selected disabled>Select Employee Field</option>
                            <option value="IT">IT</option>
                            <option value="HR">HR</option>
                        </select>
                      </div>

                      <center>
                        <button className="btn btn-primary" type="submit" onClick={sendData}>
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
  );
}


export default AddEmployee;