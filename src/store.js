import { createStore } from 'redux';

const initialState = {
    modalOpen: false,
    //sorted: [],
    employees: [
        {
            city: "B",
            dateOfBirth: "DateOfBirth",
            department: "Department",
            firstName: "FirstName",
            lastName: "LastName",
            startDate: "22/04/1999",
            state: "State",
            street: "Street",
            zipCode: "1"
        },
        {
            city: "A",
            dateOfBirth: "DateOfBirth",
            department: "Department",
            firstName: "FirstName",
            lastName: "LastName",
            startDate: "22/04/2001",
            state: "State",
            street: "Street",
            zipCode: "3"
        },
        {
            city: "C",
            dateOfBirth: "DateOfBirth",
            department: "Department",
            firstName: "FirstName",
            lastName: "Benoit",
            startDate: "22/04/2000",
            state: "State",
            street: "Street",
            zipCode: "2"
        },
        {
            city: "E",
            dateOfBirth: "DateOfBirth",
            department: "Department",
            firstName: "Alexandre",
            lastName: "Benoit",
            startDate: "22/04/2000",
            state: "State",
            street: "Street",
            zipCode: "2"
        },
        {
            city: "F",
            dateOfBirth: "DateOfBirth",
            department: "Department",
            firstName: "FirstName",
            lastName: "LastName",
            startDate: "22/04/2000",
            state: "State",
            street: "Street",
            zipCode: "2"
        },
        {
            city: "G",
            dateOfBirth: "DateOfBirth",
            department: "Department",
            firstName: "Alexandre",
            lastName: "LastName",
            startDate: "22/04/2000",
            state: "State",
            street: "Street",
            zipCode: "2"
        },
        {
            city: "D",
            dateOfBirth: "DateOfBirth",
            department: "Department",
            firstName: "FirstName",
            lastName: "Benoit",
            startDate: "22/04/2000",
            state: "State",
            street: "Street",
            zipCode: "2"
        },
        // {
        //     city: "City",
        //     dateOfBirth: "DateOfBirth",
        //     department: "Department",
        //     firstName: "FirstName",
        //     lastName: "LastName",
        //     startDate: "StartDate",
        //     state: "State",
        //     street: "Street",
        //     zipCode: "ZipCode"
        // }
    ]
};

function reducer(state = initialState, action){
    switch(action.type){
        case "switchModal": return {...state, modalOpen: action.payload.open};
        case "addEmployee": return {...state, employees: [...state.employees, action.payload.employee]};
        //case "setSortedList": return {...state, sorted: action.payload.sorted};
        case "clear": return {...initialState}; //DEBUG
        default: return state;
    }
}

export const store = createStore(reducer, initialState);