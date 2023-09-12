import { Link } from "react-router-dom";
import Modal from "../component/Modal";
import { useDispatch } from "react-redux";
import FormRowSelect from "../component/FormRowSelect";
import states from '../data/states.json'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

/*
* Home page
* Main page, used to collect employee's data from a form
* Collected data will be added to Redux store
* A confirmation modal appears as soon as data is inserted
*/
function Home() {
    const dispatch = useDispatch();

    //Start date state, used by DatePicker component
    const [startDate, setStartDate] = useState(null);
    //Birth date state, used by DatePicker component
    const [birthDate, setBirthDate] = useState(null);


    /*
    * Callback function when "save" button being clicked
    * Collects form's data, inserts it into store and shows a modal when done
    *
    * @return void
    */
    function submit(){
        //Collecting data from form
        const firstName = document.getElementById('first-name');
        const lastName = document.getElementById('last-name');
        const department = document.getElementById('department');
        const street = document.getElementById('street');
        const city = document.getElementById('city');
        const state = document.getElementById('state');
        const zipCode = document.getElementById('zip-code');
        const birth = (birthDate) ? birthDate.toLocaleDateString('fr-FR') : null;
        const start = (startDate) ? startDate.toLocaleDateString('fr-FR') : null;

        //Creating object representing an employee
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

        //Checking if all the data is correct (all fields are filled / all dropdowns's value are not default, etc.)
        if(employee.firstName && employee.lastName && employee.street && employee.city && employee.zipCode && employee.dateOfBirth && employee.startDate && employee.state !== "default"){
            //Adding employee's data to Redux store
            dispatch({type: "addEmployee", payload: {employee: employee}});
            //Changing redux state of the modal to be displayed
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

                      {/* Creating FormRowSelect and passing options props by formating imported json file */}
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
          {/* Creating modal to show a message when data is inserted into Redux store */}
          <Modal content="Employee Created!"/>
        </main>
  );
}

export default Home;
