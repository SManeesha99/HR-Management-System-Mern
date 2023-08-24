import React, { useState } from "react";
import "./css/form.css";
import axios from "axios";

export default function AddEmployee() {
  const [name, setName] = useState("");
  const [NIC, setNIC] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [type, setType] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "NIC") {
      setNIC(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "gender") {
      setGender(value);
    } else if (name === "type") {
      setType(value);
    } else if (name === "number") {
      setNumber(value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: name,
      NIC: NIC,
      email: email,
      gender: gender,
      type: type,
      number: number,
    };

    axios.post("/employee/post", data).then((res) => {
      if (res.data.success) {
        var id = res.data.success._id;
        window.location.href = `/details`;

        setName("");
        setNIC("");
        setEmail("");
        setGender("");
        setType("");
        setNumber("");
      }
    });
  };

  return (
    <div className="containerForm">
      <form className="create" onSubmit={onSubmit}>
        <h3>Add New Employee</h3>
        <center>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />

          <label>Employee Number: </label>
          <input
            type="text"
            name="number"
            value={number}
            onChange={handleChange}
            required
          />

          <label>NIC: </label>
          <input
            type="text"
            name="NIC"
            value={NIC}
            onChange={handleChange}
            required
          />

          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />

          <label>Gender: </label>
          <select
            name="gender"
            value={gender}
            onChange={handleChange}
            required
          >
            <option value="">--Select Gender--</option>
            <option value="Male">M</option>
            <option value="Female">F</option>
          </select>

          <label>Type: </label>
          <select
            name="type"
            value={type}
            onChange={handleChange}
            required
          >
            <option value="">--Select Type--</option>
            <option value="Associate Software Engineer">E0</option>
            <option value="Software Engineer">E1</option>
            <option value="Senior Software Engineer">E2</option>
          </select>

          <center>
            <button className="btn" type="submit">
              Submit
            </button>
          </center>
        </center>
      </form>
    </div>
  );
}
