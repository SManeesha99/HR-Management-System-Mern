import React, { Component } from 'react';
import axios from 'axios';
import { jsPDF } from "jspdf";
import "jspdf-autotable";

class MonthlyReport extends Component {
    generateMonthlyReport = () => {
        const { employee } = this.state; 

        const doc = new jsPDF();
        doc.text("Monthly Attendance Report", 10, 10);

        const tableData = employee.map((emp, index) => [
            index + 1,
            emp.name,
            emp.attendance,
            emp.checkIn,
            emp.checkOut,
        ]);

        doc.autoTable({
            head: [['No.', 'Name', 'Attendance', 'Check In', 'Check Out']],
            body: tableData,
        });

        doc.save("monthly_attendance_report.pdf");
    }

    render() {
        return (
            <div>
                <button onClick={this.generateMonthlyReport}>Generate Monthly Report</button>
            </div>
        );
    }
}

export default MonthlyReport;
