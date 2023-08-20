import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import "./css/form.css";

function EditEmployee() {
  const { id } = useParams();
  const [employee, setEmployee] = useState({});
  const [name, setName] = useState("");
  const [NIC, setNIC] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    axios.get(`/employee/post/${id}`).then((res) => {
      if (res.data.success) {
        setEmployee(res.data.post);
        const { name, NIC, email, gender, type } = res.data.post;
        setName(name);
        setNIC(NIC);
        setEmail(email);
        setGender(gender);
        setType(type);
      }
    });
  }, [id]);

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
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      NIC,
      email,
      gender,
      type,
    };

    axios
      .put(`/employee/post/${id}`, data)
      .then((res) => {
        if (res.data.success) {
          Swal.fire({
            title: "Updated Successfully!",
            text: "Your changes have been saved.",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
          }).then(() => {
            window.location.href = `/details`;
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text:
            "An error occurred while updating the post. Please try again later.",
          icon: "error",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div className="containerForm">
      <form className="create" onSubmit={onSubmit}>
        <h3>Update Employee</h3>

        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder={employee.name}
        />

        <label>NIC: </label>
        <input
          type="text"
          name="NIC"
          value={NIC}
          onChange={handleChange}
          placeholder={employee.NIC}
          minLength="6"
          maxLength="10"
        />

        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder={employee.email}
        />

        <label>Gender: </label>
        <select
          name="gender"
          value={gender}
          onChange={handleChange}
          placeholder={employee.gender}
        >
          <option value="">{employee.gender}</option>
          <option value="Male">M</option>
          <option value="Female">F</option>
        </select>

        <label>Type: </label>
        <select
          name="type"
          value={type}
          onChange={handleChange}
          placeholder={employee.type}
        >
          <option value="">{employee.type}</option>
          <option value="Associate Software Engineer">E0</option>
          <option value="Software Engineer">E1</option>
          <option value="Senior Software Engineer">E2</option>
        </select>

        <center>
          <button className="btn" type="submit">
            Update Employee
          </button>
        </center>
      </form>
    </div>
  );
}

export default EditEmployee;
