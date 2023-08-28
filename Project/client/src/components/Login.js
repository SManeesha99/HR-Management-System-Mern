import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [empType, setEmpType] = useState("");

    const login = async () => {
        try {
            const loginUser = { email, password, empType };
            const response = await axios.post("http://localhost:8000/user/login", loginUser);

            localStorage.setItem("email", response.data.email);
            localStorage.setItem("empType", response.data.empType);
            localStorage.setItem("id", response.data.id);
            localStorage.setItem("name", response.data.name);

            if (response.data.empType === "emp") {
                Swal.fire({
                    title: "Success!",
                    text: "Login Successful Employee!",
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false,
                });
                navigate("/checkin", {
                    state: {
                        id: response.data._id
                    }
                });
            } else if (response.data.empType === "hrmanager") {
                Swal.fire({
                    title: "Success!",
                    text: "Login Successful HR Department!",
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false,
                });
                navigate("/details", {
                    state: {
                        id: response.data._id
                    }
                });
            } else {
                Swal.fire({
                    title: "Warning!",
                    text: "Login Unsuccessful!",
                    icon: 'error',
                    timer: 2000,
                    showConfirmButton: false,
                });
                setEmail("");
                setPassword("");
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    return (
        <div className="containerForm">
            <form className="create">
                <h3>Login</h3>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        autoComplete="off"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
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
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="empType">
                        <strong>Employee Type</strong>
                    </label>
                    <select className="form-select" aria-label="Floating label select example" id="empType" onChange={e => setEmpType(e.target.value)}>
                        <option defaultValue>Select Employee Type</option>
                        <option value="emp">Employee</option>
                        <option value="hrmanager">HR Manager</option>
                    </select>
                </div>

                <button type="button" className="btn btn-primary" onClick={login}>
                    Sign In
                </button>
            </form>
        </div>
    );
}

export default Login;
