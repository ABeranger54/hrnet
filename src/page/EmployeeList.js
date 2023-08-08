import { Link } from "react-router-dom";

function EmployeeList() {
  return (
    <main>
      <div id="employee-div" class="container">
        <h1>Current Employees</h1>
          <table id="employee-table" class="display"></table>
          <Link to="/">Home</Link>
      </div>
    </main>
  );
}

export default EmployeeList;
