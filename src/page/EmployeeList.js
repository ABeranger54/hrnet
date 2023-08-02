import { Link } from "react-router-dom";

function EmployeeList() {
  return (
    <html>
      <head>
          <title>HRnet - Current Employees</title>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js"></script>
          <link rel="stylesheet" href="https://cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css" />
          <script src="employee-list.js"></script>
          <link rel="stylesheet" href="app.css" />
      </head>
      <body>
          <div id="employee-div" class="container">
              <h1>Current Employees</h1>
              <table id="employee-table" class="display"></table>
              <Link to="/">Home</Link>
          </div>
      </body>
  </html>
  );
}

export default EmployeeList;
