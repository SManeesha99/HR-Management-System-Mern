import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secretKey, setSecretKey] = useState(""); // New state for secret key
    const navigate = useNavigate();

    const secretKeyToMatch = "hrmanager"; // Replace with your actual secret key

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (secretKey !== secretKeyToMatch) {
            alert("Invalid secret key. Registration is not allowed.");
            return;
        }
        
        axios.post("/register", { name, email, password })
            .then(result => {
                console.log(result);
                navigate("/login");
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
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
                        onChange={(e) => setName(e.target.value)}
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
                        onChange={(e) => setEmail(e.target.value)}
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
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="secretKey">
                        <strong>Secret Key</strong>
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        autoComplete="off"
                        name="secretKey"
                        placeholder="Enter the secret key"
                        onChange={(e) => setSecretKey(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Register
                </button>
            </form>
            <p>Already have an account?</p>
            <Link to="/login" className="btn btn-primary">
                Login
            </Link>
        </div>
    );
}

export default Register;
