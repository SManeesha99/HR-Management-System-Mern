import React, { Component } from 'react';
import axios from 'axios';
import { useParams, useLocation } from "react-router-dom";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

function withParams(Component) {
    return props => <Component params={
        useParams()
    } />
}

class AttendancePrintPreview extends Component {

    constructor(props) {
        super(props);

        this.attendance = "";

        this.state = {
            id: props.params.id,
            employee: []
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



    handlePrint = () => {
        const doc = new jsPDF();
        const table = document.getElementById("attendanceTable");
        const tableRows = table.querySelectorAll("tr");
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString();
        const presentCount = this.state.employee.filter(employee => employee.attendance === "Available").length;
        const absentCount = this.state.employee.filter(employee => employee.attendance === "Not Available").length;


        fetch("../images/logo.png")
            .then(response => response.arrayBuffer())
            .then(logoData => {
                const logoUrl = URL.createObjectURL(new Blob([logoData]));


                doc.addImage(logoUrl, "PNG", 10, 21, 40, 40);
                doc.text("Sensus Hub", 55, 30);
                doc.text("Address: Sensus Hub,Boralesgamuwa", 55, 40);
                doc.text("Phone: 0915676543", 55, 50);
                doc.text("Email: sensushub@gmail.com", 55, 60);
                doc.text("Attendance Details - " + formattedDate, 80, 80);
                doc.text("Today Available: " + presentCount, 10, 110);
                doc.text("Today Not Available: " + absentCount, 10, 120);


                doc.autoTable({
                    html: "#attendanceTable",
                    startY: 150,
                });

                doc.save("Attendance_Details.pdf");
            })
            .catch(error => {
                console.error("Error loading logo image:", error);
            });
    };


    render() {

        return (
            <div>
                <div className='mt-5'>
                    <div className="containerAttendance">
                        <button onClick={this.handlePrint} className="backBtn">Save</button><br />
                        <div className="add_btn mt-2 mb-2">

                            <div className="row">
                                <h2><b>Sensus Hub</b></h2>
                                <p>Address: Sensus Hub,Boralesgamuwa</p>
                                <p>Phone: 0915676543</p>
                                <p>Email: sensushub@gmail.com</p>
                                <h3>Attendance Details</h3>
                            </div>
                        </div>

                        <div className="table-responsive">
                            <table className="table" id="attendanceTable">
                                <thead>
                                    <tr>
                                        <th scope="col">No.</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Attendance</th>
                                        <th scope="col">Check In Time</th>
                                        <th scope="col">Chech Out Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.employee.map((employee, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{employee.name}</td>
                                            <td>{employee.attendance}</td>
                                            <td>{employee.checkIn}</td>
                                            <td>{employee.checkOut}</td>
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

export default withParams(AttendancePrintPreview);