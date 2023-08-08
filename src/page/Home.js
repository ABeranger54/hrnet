import { Link } from "react-router-dom";
import Modal from "../component/Modal";
import { useDispatch } from "react-redux";

function Home() {

    const dispatch = useDispatch();

    function submit(){
        const firstName = document.getElementById('first-name');
        const lastName = document.getElementById('last-name');
        const dateOfBirth = document.getElementById('date-of-birth');
        const startDate = document.getElementById('start-date');
        const department = document.getElementById('department');
        const street = document.getElementById('street');
        const city = document.getElementById('city');
        const state = document.getElementById('state');
        const zipCode = document.getElementById('zip-code');

        const employee = {
            firstName: firstName.value,
            lastName: lastName.value,
            dateOfBirth: dateOfBirth.value,
            startDate: startDate.value,
            department: department.value,
            street: street.value,
            city: city.value,
            state: state.value,
            zipCode: zipCode.value
        };
        dispatch({type: "addEmployee", payload: {employee: employee}});
        dispatch({type: "switchModal", payload: {open: true}});
    }

    return (
        <main>
          <div className="title">
              <h1>HRnet</h1>
          </div>
          <div className="container">
              <Link to="/employee-list">View Current Employees</Link>
              <h2>Create Employee</h2>
              <form action="#" id="create-employee">
                  <label htmlFor="first-name">First Name</label>
                  <input type="text" id="first-name" />

                  <label htmlFor="last-name">Last Name</label>
                  <input type="text" id="last-name" />

                  <label htmlFor="date-of-birth">Date of Birth</label>
                  <input id="date-of-birth" type="text" />

                  <label htmlFor="start-date">Start Date</label>
                  <input id="start-date" type="text" />

                  <fieldset className="address">
                      <legend>Address</legend>

                      <label htmlFor="street">Street</label>
                      <input id="street" type="text" />

                      <label htmlFor="city">City</label>
                      <input id="city" type="text" />

                      <label htmlFor="state">State</label>
                      <select name="state" id="state"></select>

                      <label htmlFor="zip-code">Zip Code</label>
                      <input id="zip-code" type="number" />
                  </fieldset>

                  <label htmlFor="department">Department</label>
                  <select name="department" id="department">
                      <option>Sales</option>
                      <option>Marketing</option>
                      <option>Engineering</option>
                      <option>Human Resources</option>
                      <option>Legal</option>
                  </select>
              </form>

              <button onClick={() => submit()}>Save</button>
          </div>
          <Modal content="Employee Created!"/>
        </main>
  );
}

export default Home;
