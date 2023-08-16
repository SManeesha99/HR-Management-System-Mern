import React, { Component } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';


function withParams(Component) {
    return props => <Component params={
        useParams()
    } />
}

class Attendance extends Component {

    constructor(props) {
        super(props);

        this.status = "";

        this.state = {
            id: props.params.id,
            employee: [],
            searchKey: "",
        };

    }

    componentDidMount() {
        this.retrievePosts();

    }

    retrievePosts() {
        axios.get("/employee/post").then(res => {
            if (res.data.success) {
                this.setState({ employee: res.data.existingPosts });
                console.log(this.state.employee)
            }
        });
    }


    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        });
        this.status = value;
    }

    onDelete = (id) => {
        Swal.fire({
            title: 'Are you sure you want to delete this?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#FFB400',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/employee/post/${id}`).then((res) => {
                    Swal.fire(
                        'Deleted!',
                        'employee has been deleted.',
                        'success'
                    )
                    this.retrievePosts();
                });
            }
        });
    };


    render() {
        return (
            <div>
                <div className='mt-5'>
                    <div className="container3">
                        <div className="add_btn mt-2 mb-2">
                        </div>
                        <section class="main">
                            <div class="main-top">
                                <h1>Employee List</h1>
                            </div>
                            <table class="table" id="EmployeeTable">
                                <thead>
                                    <th scope="col" >No.</th>
                                    <th scope="col" >Name</th>
                                    <th scope="col" >Email</th>
                                    <th scope="col">NIC</th>
                                    <th scope="col" >Gender</th>
                                    <th scope="col" >Type</th>
                                    <th scope="col" >Salary</th>
                                    <th scope="col" >Attendance</th>

                                </thead>
                                <tbody> {
                                    this.state.employee.map((employee, index) => (
                                        <tr key={index}>

                                            <th scope="row">
                                                {
                                                    index + 1
                                                }</th>

                                            <td> {
                                                employee.name
                                            }</td>

                                            <td>{
                                                employee.email
                                            }</td>

                                            <td>{
                                                employee.id
                                            }</td>
                                            <td>{
                                                employee.gender
                                            }</td>

                                            <td>{
                                                employee.type
                                            }</td>
                                            <td>{
                                                employee.salary
                                            }</td>
                                            <td>{
                                                employee.attendance
                                            }</td>

                                            <center>
                                                <td>
                                                    <a href={`/employee/edit/${employee._id}`} className="btn-edit">Update</a>
                                                </td>
                                                <td onClick={
                                                    () => this.onDelete(employee._id)
                                                }>
                                                    <a className="btn-delete">Delete</a>
                                                </td>
                                            </center>
                                        </tr>
                                    ))
                                } </tbody>


                            </table>

                            <a href="/employee/add">
                                <button className="btn" type="submit">
                                    Add Employee
                                </button></a>
                        </section>

                    </div>
                </div>
            </div>

        )
    }
}

export default withParams(Attendance);