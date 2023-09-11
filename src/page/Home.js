import { Link } from "react-router-dom";
import Modal from "../component/Modal";
import { useDispatch } from "react-redux";
import FormRowSelect from "../component/FormRowSelect";
import states from '../data/states.json'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

function Home() {
    const dispatch = useDispatch();

    const [startDate, setStartDate] = useState(null);
    const [birthDate, setBirthDate] = useState(null);

    function submit(){
        const firstName = document.getElementById('first-name');
        const lastName = document.getElementById('last-name');
        const department = document.getElementById('department');
        const street = document.getElementById('street');
        const city = document.getElementById('city');
        const state = document.getElementById('state');
        const zipCode = document.getElementById('zip-code');
        const birth = (birthDate) ? birthDate.toLocaleDateString('fr-FR') : null;
        const start = (startDate) ? startDate.toLocaleDateString('fr-FR') : null;

        const employee = {
            firstName: firstName.value,
            lastName: lastName.value,
            dateOfBirth: birth,
            startDate: start,
            department: department.value,
            street: street.value,
            city: city.value,
            state: state.value,
            zipCode: zipCode.value
        };
        if(employee.firstName && employee.lastName && employee.street && employee.city && employee.zipCode && employee.dateOfBirth && employee.startDate && employee.state !== "default"){
            dispatch({type: "addEmployee", payload: {employee: employee}});
            dispatch({type: "switchModal", payload: {open: true}});
        }
        
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
                  <DatePicker id="date-of-birth" selected={birthDate} onChange={(date) => setBirthDate(date)} />

                  <label htmlFor="start-date">Start Date</label>
                  <DatePicker id="start-date" selected={startDate} onChange={(date) => setStartDate(date)} />

                  <fieldset className="address">
                      <legend>Address</legend>

                      <label htmlFor="street">Street</label>
                      <input id="street" type="text" />

                      <label htmlFor="city">City</label>
                      <input id="city" type="text" />

                      <FormRowSelect name="state" label="Série" default="Select" options={states.map(e => {return {value: e.abbreviation, label: e.name}})} />

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
