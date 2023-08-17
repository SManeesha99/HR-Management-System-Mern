import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("login", { email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Login Success") {
                    navigate("/details");
                } else if (result.data === "Password didn't match") {
                    console.log("Password is incorrect");
                } else if (result.data === "User not registered") {
                    console.log("User is not registered");
                }
            })
            .catch(err => console.log(err));
    };


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>


                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input type="email"
                        className="form-control"
                        autoComplete="off"
                        name="email"
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Password</strong>
                    </label>
                    <input type="password"
                        className="form-control"
                        autoComplete="off"
                        name="password"
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login