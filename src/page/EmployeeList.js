import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function EmployeeList() {
  console.log(useSelector((state) => state.employees));
  return (
    <main>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
          <table id="employee-table" className="display"></table>
          <Link to="/">Home</Link>
      </div>
    </main>
  );
}

export default EmployeeList;
