

const LeaveCountCard = ({alCount,clCount,mlCount}) => {
  return (
    <div className="row d-flex justify-content-center">
                <div class="col-md-3 p-4 m-2" style={{border:"2px solid black",textAlign:"center",borderRadius:"5px"}}>
                    <h1 style={{fontSize:"4rem"}}>0</h1>
                    <h4>Annual Leaves</h4>
                </div>
                <div class="col-md-3 p-4 m-2" style={{border:"2px solid black",textAlign:"center",borderRadius:"5px"}}>
                <h1 style={{fontSize:"4rem"}}>0</h1>
                    <h4>Casual Leaves</h4>
                </div>
                <div class="col-md-3 p-4 m-2" style={{border:"2px solid black",textAlign:"center",borderRadius:"5px"}}>
                <h1 style={{fontSize:"4rem"}}>0</h1>
                    <h4>Medical Leaves</h4>
                </div>
              </div>
  )
}

export default LeaveCountCard
