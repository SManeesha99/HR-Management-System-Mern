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

        this.note = "";

        this.state = {
            id: props.params.id,
            posts: [],
            searchKey: "",
        };

    }

    componentDidMount() {
        this.retrievePosts();

    }

    retrievePosts() {
        axios.get("/employee/post").then(res => {
            if (res.data.success) {
                this.setState({ posts: res.data.existingPosts });
                console.log(this.state.posts)
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
        this.note = value;
    }

    onSave = (id) => {
    let data = this.state.posts.filter((post) => post._id === id)[0];
    data.note = this.note;

    axios.put(`/employee/post/${id}`, data).then((res) => {
        if (res.data.success) {
            Swal.fire({
                title: 'Updated Successfully!',
                text: 'Your changes have been saved.',
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK'
            }).then(() => {
                this.setState({
                    name: "",
                    attendance: ""
                });
            });
        }
    }).catch((error) => {
        Swal.fire({
            title: 'Error!',
            text: 'An error occurred while updating the post. Please try again later.',
            icon: 'error',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
        });
    });
};



  
    //search part
    handleSearchKeyChange = (e) => {
        const searchKey = e.currentTarget.value;
        this.setState({ searchKey });
        this.filterData(this.state.posts, searchKey);
    };

    filterData(posts, searchkey) {
        const result = posts.filter((post) =>
            post.name.toLowerCase().includes(searchkey.toLowerCase())
        );
        this.setState({ posts: result });
    }

    resetSearch = () => {
        this.setState({ searchKey: "" }, () => {
            this.retrievePosts();
        });
    };

    //count
    calculateAvailableCount = () => {
        return this.state.posts.filter(
            post => post.attendance === "Available"
        ).length;
    };

    calculateNotAvailableCount = () => {
        return this.state.posts.filter(
            post => post.attendance === "Not Available"
        ).length;
    };

    render() {
        const { searchKey } = this.state;
        const filteredDelivery = this.state.posts.filter((posts) =>
        posts.name.toLowerCase().includes(searchKey.toLowerCase())
        );



        return (
            <div>
                <div className='mt-5'>
                    <div className="containerAttendance">
                        <h3>Available Count: {this.calculateAvailableCount()}</h3>
                        <h3>Not Available Count: {this.calculateNotAvailableCount()}</h3>
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
                                    {this.state.posts.map((posts, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{posts.name}</td>
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
                                                        posts.attendance
                                                    } /></td>


                                            


                                            <td onClick={
                                                () => this.onSave(posts._id)
                                            }>
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