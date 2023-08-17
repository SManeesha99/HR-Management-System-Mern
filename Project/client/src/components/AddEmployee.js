import React, { Component } from "react";
import "./css/form.css";
import axios from "axios";

export default class AddEmployee extends Component {


  constructor(props) {
    super(props);
    this.state = {
      employee: [],
      name: "",
      NIC: "",
      email: "",
      gender: "",
      type: "",
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

    const { name, NIC, email, gender, type, salary } = this.state;

    const data = {
      name: name,
      NIC: NIC,
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
        window.location.href = `/details`;

        this.setState({
          name: "",
          NIC: "",
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
              name="NIC"
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
            {/* <input
              type="text"
              name="type"
              value={this.state.type}
              onChange={this.handleChange}
            /> */}
            <select
              name="type"
              value={this.state.type}
              onChange={this.handleChange}
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
}
