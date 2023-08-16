import React, { useState, Component } from "react";
import "./css/form.css";
import axios from "axios";

export default class AddEmployee extends Component {


  constructor(props) {
    super(props);
    this.state = {
      employee: [],
      name: "",
      id: "",
      email: "",
      gender: "",
      type: "",
      salary: "",

    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { name, id, email, gender, type, salary } = this.state;

    const data = {
      name: name,
      id: id,
      email: email,
      gender: gender,
      type: type,
      salary: salary,
    };

    console.log(data);

    axios.post("/employee/post", data).then((res) => {
      if (res.data.success) {
        console.log(res.data.success._id);
        var id = res.data.success._id;
        window.location.href = `/attendance`;

        this.setState({
          name: "",
          id: "",
          email: "",
          gender: "",
          type: "",
          salary: "",
        });
      }
    });
  };

  render() {
    return (
      <div className="containerForm">

        <form className="create" onSubmit={this.onSubmit}>
          <h3>Add New Employee</h3>
          <center>
            <label>Name: </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />

            <label>NIC: </label>
            <input
              type="text"
              name="id"
              value={this.state.id}
              onChange={this.handleChange}
              required
            />

            <label>Email: </label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />

            <label>Gender: </label>
            <select
              name="gender"
              value={this.state.gender}
              onChange={this.handleChange}
              required
            >
              <option value="">--Select Gender--</option>
              <option value="Male">M</option>
              <option value="Female">F</option>
            </select>

            <label>Type: </label>
            <input
              type="tel"
              name="type"
              value={this.state.type}
              onChange={this.handleChange}

            />


            <label>Salary: </label>
            <input
              type="number"
              name="salary"
              value={this.state.salary}
              onChange={this.handleChange}
              required></input>

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
}
