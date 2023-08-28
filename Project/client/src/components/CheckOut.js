import React from 'react'

const CheckOut = () => {
    
  return (
    <div>
        <div className='py-5'>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-5">
                <div className="card">
                    <div className="card-header">
                        <h3>Add Daily CheckOut</h3>
                    </div>
                    <div className="card-body text-center">
                        <form>
                            <div className="form-group">
                                <label htmlFor="empNo">Employee No</label>
                                <input
                                    type="text"
                                    id="empNo"
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="date">Date</label>
                                <input
                                    type="date"
                                    id="date"
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="checkOut">Check-Out</label>
                                <div className="d-flex align-items-center justify-content-center">
                                    <input
                                        type="time"
                                        id="checkOut"
                                        className="form-control"
                                        required
                                    />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary mt-3">
                                Submit
                            </button>
                        </form>
                        <hr />
                                {/* <button type="button" className="btn mt-3">
                                    <a href='/viewAttendance' style={{ decoration:'none' }}>View Attendance</a>
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CheckOut