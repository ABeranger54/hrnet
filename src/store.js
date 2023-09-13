import { createStore } from 'redux';

const initialState = {
    modalOpen: false,
    employees: [
        //Samples used to test DataTable features
        {
            city: "New York",
            dateOfBirth: new Date("07/07/1983"),
            department: "Marketing",
            firstName: "Roger",
            lastName: "Lang",
            startDate: new Date("04/22/2022"),
            state: "NY",
            street: "East Orange",
            zipCode: "07017"
        },
        {
            city: "Sacramento",
            dateOfBirth: new Date("11/02/1997"),
            department: "Engineering",
            firstName: "Willie",
            lastName: "Barry",
            startDate: new Date("04/11/2021"),
            state: "CA",
            street: "Newton Booth",
            zipCode: "94204"
        },
        {
            city: "Orlando",
            dateOfBirth: new Date("04/23/1974"),
            department: "Sales",
            firstName: "Lilia",
            lastName: "Lynn",
            startDate: new Date("08/17/2023"),
            state: "FL",
            street: "Ontario ave",
            zipCode: "32802"
        },
        {
            city: "Indianapolis",
            dateOfBirth: new Date("01/29/1995"),
            department: "Legal",
            firstName: "Terry",
            lastName: "Hubbard",
            startDate: new Date("05/17/2020"),
            state: "IN",
            street: "Warren Woods",
            zipCode: "46203"
        },
    ]
};

function reducer(state = initialState, action){
    switch(action.type){
        case "switchModal": return {...state, modalOpen: action.payload.open};
        case "addEmployee": return {...state, employees: [...state.employees, action.payload.employee]};
        default: return state;
    }
}

export const store = createStore(reducer, initialState);