import { useEffect, useState } from "react";
import EmpSideNav from "../EmpSideNav";
import { useParams } from "react-router-dom";
import LeaveCountCard from "./LeaveCountCard";
import LeavesHistory from "./LeavesHistory";

const LeaveRequestDashboard = () => {
  const [employee, setEmployee] = useState({});
  const { empId } = useParams();

  return (
    <>
      <EmpSideNav />
      <div className="container ml-3">
        <div className="container mt-4 ml-3">
          <div className="card">
            <div className="card-header">
              <div className="row text-center">
                <h2>Leave request portal</h2>
              </div>
            </div>
            <div className="card-body overflow-hidden text-center ">
              <LeaveCountCard alCount={0} clCount={0} mlCount={0} />
            </div>
            <hr />
            <p className="h2 text-center">Submit a leave</p>
            <hr />
            <form onSubmit={console.log("form submitted!")}>
              <div className="row p-3  d-flex justify-content-evenly">
                <div className="col-md-3">
                  <div>
                    <label className="form-label">Select leave type:</label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      required
                    >
                      <option selected disabled>
                        select one of the type
                      </option>
                      <option value="1">Casual leave</option>
                      <option value="2">Medical leave</option>
                      <option value="3">Annual leave</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <div>
                    <label className="form-label">From:</label>
                    <input
                      type="date"
                      className="form-control"
                      min={
                        new Date(
                          new Date().getTime() -
                            new Date().getTimezoneOffset() * 60000
                        )
                          .toISOString()
                          .split("T")[0]
                      }
                      required
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div>
                    <label className="form-label">To:</label>
                    <input
                      type="date"
                      className="form-control"
                      min={
                        new Date(
                          new Date().getTime() -
                            new Date().getTimezoneOffset() * 60000
                        )
                          .toISOString()
                          .split("T")[0]
                      }
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center mb-3" >
                      <button type="submit" className="btn btn-primary">Request</button>
              </div>
            </form>
            <hr/>
            <div className="d-flex justify-content-center m-3">
              <LeavesHistory/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaveRequestDashboard;
