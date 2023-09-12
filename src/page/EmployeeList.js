import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DataTable from "../component/DataTable";

/*
* EmployeeList page
* Used to display list of Employees using DataTable component
*/
function EmployeeList() {
  //Retrieve employees list from Redux store
  const employees = useSelector((state) => state.employees);
  return (
    <main>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
          {/* Creating DataTable using employees list and columns label/id */}
          <DataTable data={employees} columns={[
            { title: 'First Name', data: 'firstName'},
            { title: 'Last Name', data: 'lastName' },
            { title: 'Start Date', data: 'startDate' },
            { title: 'Department', data: 'department' },
            { title: 'Date of Birth', data: 'dateOfBirth' },
            { title: 'Street', data: 'street' },
            { title: 'City', data: 'city' },
            { title: 'State', data: 'state' },
            { title: 'Zip Code', data: 'zipCode' }
          ]} />
          <Link to="/">Home</Link>
      </div>
    </main>
  );
}

export default EmployeeList;
