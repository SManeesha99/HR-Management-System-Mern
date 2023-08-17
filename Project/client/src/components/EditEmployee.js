import React, { Component } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import Swal from "sweetalert2";


function withParams(Component) {
  return (props) => <Component params={useParams()} />;
}

class EditEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.params.id,
      employees: [],
      name: "",
      NIC: "",
      email: "",
      gender: "",
      type: "",
    };
  }

  componentDidMount() {
    console.log(this.state.id);
    const id = this.state.id;
    axios.get(`/employee/post/${id}`).then((res) => {
      console.log(res.data.post);
      if (res.data.success) {
        this.setState({
          employee: res.data.post,
        });
        console.log(this.state.employees);
      }
    });
  }

  //edit
  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.state.id;

    const { name, NIC, email, gender, type } = this.state;

    let data = this.state.employees;
    data = {
      name: name.length != 0 ? name : data.name,
      NIC: NIC.length != 0 ? NIC : data.NIC,
      email: email.length != 0 ? email : data.email,
      gender: gender.length != 0 ? gender : data.gender,
      type: type.length != 0 ? type : data.type,
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
            this.setState({
              firstName: "",
              lastName: "",
              email: "",
              gender: "",
              contactNo: "",
            });
            window.location.href = `/details`;
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "An error occurred while updating the post. Please try again later.",
          icon: "error",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });
      });
  };

  render() {
    const { _id, name, NIC, email, gender, type } =
      this.state.employees;
    return (
      <div className="container1">
        <form className="update" onSubmit={this.onSubmit}>
          <h3>Update Employee</h3>

          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder={name}
          />

          <label>NIC: </label>
          <input
            type="text"
            name="NIC"
            value={this.state.NIC}
            onChange={this.handleChange}
            placeholder={NIC}
            minlength="6"
            maxlength="10"
          />

          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder={email}
          />

          <label>Gender: </label>
          <select
            name="gender"
            value={this.state.gender}
            onChange={this.handleChange}
            placeholder={gender}
          >
            <option value="">--Select Gender--</option>
            <option value="Male">M</option>
            <option value="Female">F</option>
          </select>

          <label>Type: </label>
          <select
            name="type"
            value={this.state.type}
            onChange={this.handleChange}
            placeholder={type}
            required
          >
            <option value="">--Select Type--</option>
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
}

export default withParams(EditEmployee);