const LeavesHistory = () => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Type</th>
          <th scope="col">From</th>
          <th scope="col">To</th>
          <th scope="col">Total days</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Annual Leave</td>
          <td>{new Date().toLocaleDateString()}</td>
          <td>{new Date().toLocaleDateString()}</td>
          <td>1</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Casual Leave</td>
          <td>{new Date().toLocaleDateString()}</td>
          <td>{new Date().toLocaleDateString()}</td>
          <td>1</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Medical Leave</td>
          <td>{new Date().toLocaleDateString()}</td>
          <td>{new Date().toLocaleDateString()}</td>
          <td>1</td>
        </tr>
      </tbody>
    </table>
  );
};

export default LeavesHistory;
