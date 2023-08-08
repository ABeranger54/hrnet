import { createStore } from 'redux';

const initialState = {
    modalOpen: false,
    employees: []
};

function reducer(state = initialState, action){
    switch(action.type){
        case "switchModal": return {...state, modalOpen: action.payload.open};
        case "addEmployee": return {...state, employees: [...state.employees, action.payload.employee]};
        case "clear": return {...initialState};
        default: return state;
    }
}

export const store = createStore(reducer, initialState);