import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [empType, setEmpType] = useState("");

    function sendData(e){
        const newuser = {
            name,
            email,
            password,
            empType,
        }
        if( name==='' && email === '' && password === '' && empType === '' ) {
            Swal.fire("All Fields are empty");
        }else if(name === ''){
            Swal.fire("Name Field is empty")
        }else if(email === ''){
            Swal.fire("Email Field is empty")
        }else if(password === ''){
            Swal.fire("Password Field is empty")
        }else if(empType === ''){
            Swal.fire("Field is Employee Type empty")
        }else{
            axios.post("http://localhost:8000/user/add", newuser).then(()=>{
                Swal.fire({
                    title: "Success!",
                    text: "Registered Successfully",
                    icon: 'success',
                    timer: 2000,
                    button: false,
                    });
                    const timer = setTimeout(() => {
                      window.location.reload()
                    }, 2000);
            }).catch((e)=>{
                alert(e);
            })
        }
    }
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [secretKey, setSecretKey] = useState("");
    // const navigate = useNavigate();



    // const handleSubmit = (e) => {
    //     e.preventDefault();


    //     axios.post("/register", { name, email, password })
    //         .then(result => {
    //             console.log(result);
    //             navigate("/login");
    //         })
    //         .catch(err => console.log(err));

    return(
        <div className="containerForm">
        <form className="create">
            <h3>Register</h3>
            <div className="mb-3">
                <label htmlFor="name">
                    <strong>Name</strong>
                </label>
                <input
                    type="text"
                    className="form-control rounded-0"
                    autoComplete="off"
                    name="name"
                    placeholder="Enter your name"
                    onChange={(e) => ( setName(e.target.value) )}
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
                    placeholder="Enter your email"
                    onChange={(e) => ( setEmail(e.target.value) )}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="password">
                    <strong>Password</strong>
                </label>
                <input
                    type="password"
                    className="form-control"
                    autoComplete="off"
                    name="password"
                    placeholder="Enter your password"
                    onChange={(e) => ( setPassword(e.target.value) )}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="empType">
                    <strong>Employee Type</strong>
                </label>
                <select class="form-select" id="empType" onChange={(e) => ( setEmpType(e.target.value) )} aria-label="Floating label select example">
                    <option selected disabled>Select Employee Type</option>
                    <option value="emp">Employee</option>
                    <option value="hrmanager">HR Manager</option>
                </select>
            </div>
            



            <button type="button" class="btn btn-primary" onClick={sendData} >Sign Up</button>
            <p>Already have an account?</p>
            <Link to="/login" className="btn btn-primary">
                Login
            </Link>
        </form>

    </div>
    )

}
    
   

export default Register;
