import React, { Component } from 'react';
import axios from 'axios';
import { useParams, useLocation } from "react-router-dom";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import Swal from 'sweetalert2';

function withParams(Component) {
    return props => <Component params={
        useParams()
    } />
}

class AdminDelivery extends Component {

    constructor(props) {
        super(props);

        this.attendance = "";

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



    // edit
    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        });
        this.attendance = value;
    }

    onSave = (id) => {
        let data = this.state.employee.filter((post) => post._id === id)[0];
        data.attendance = this.attendance;
    
        axios.put(`/employee/post/${id}`, data).then((res) => {
            if (res.data.success) {
                Swal.fire({
                    title: 'Updated Successfully!',
                    text: 'Your changes have been saved.',
                    icon: 'success',
                    showConfirmButton: false, // Hide the "OK" button
                    timer: 3000, // Automatically close after 3 seconds
                }).then(() => {
                    this.setState({
                        name: "",
                        attendance: ""
                    });
                });
            }
        });
    };
    


    //search part
    handleSearchKeyChange = (e) => {
        const searchKey = e.currentTarget.value;
        this.setState({ searchKey });
        this.filterData(this.state.employee, searchKey);
    };

    filterData(employee, searchkey) {
        const result = employee.filter((post) =>
            post.name.toLowerCase().includes(searchkey.toLowerCase())
        );
        this.setState({ employee: result });
    }

    resetSearch = () => {
        this.setState({ searchKey: "" }, () => {
            this.retrievePosts();
        });
    };

    render() {
        const { searchKey } = this.state;
        const filteredDelivery = this.state.employee.filter((employee) =>
            employee.name.toLowerCase().includes(searchKey.toLowerCase())
        );
        return (
            <div>
                <div className='mt-5'>
                    <div className="container">
                       <form className="form-inline my-2 my-lg-9 ml-auto">
                            <input
                                className="form-control"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                value={searchKey}
                                onChange={this.handleSearchKeyChange}
                            />
                            <button
                                className="btn btn-outline-success my-2 my-sm-0"
                                type="button"
                                onClick={this.resetSearch}
                            >
                                Reset
                            </button>
                        </form>
                        <div className="table-responsive">
                            <table className="table" id="deliveryTable">
                                <thead>
                                    <tr className="table-dark">
                                        <th scope="col"></th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Attendance</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.employee.map((employee, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{employee.name}</td>
                                            <td>
                                                <input type="text" class="form-control"
                                                    value={
                                                        this.state.attendance
                                                    }
                                                    onChange={
                                                        this.handleChange
                                                    }
                                                    id="formGroupExampleInput"
                                                    placeholder={
                                                        employee.attendance
                                                    } /></td>





                                            <td onClick={() => {
                                                this.onSave(employee._id);
                                                setTimeout(() => {
                                                    window.location.reload(); 
                                                }, 1200);
                                            }}>
                                                <a className="btn btn-success">
                                                    <i className="fas fa-edit"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    ))
                                    } </tbody>


                            </table>



                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withParams(AdminDelivery);