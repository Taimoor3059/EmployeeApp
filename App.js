import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import EmployeeApp from './src/EmployeeApp';


const initState = {
  1: {
    empid: 1,
    empName: 'Employee One',
    empSalary: '10000.0'
  },
  2: {
    empid: 2,
    empName: 'Employee Two',
    empSalary: '12000.0'
  },
  3: {
    empid: 3,
    empName: 'Employee Three',
    empSalary: '13000.0'
  },
  4: {
    empid: 4,
    empName: 'Employee Four',
    empSalary: '14000.0'
  },
  5: {
    empid: 5,
    empName: 'Employee Five',
    empSalary: '15000.0'
  },
}

function reducer (state= initState, action) {
  let initialSalary;
  let increment;
  let newSalary;
  let employeeObject;

  if (action.id) {
    initialSalary = state[action.id].empSalary;
    increment = (initialSalary / 100) * 20;
  }


  switch (action.type) {
    case 'GOOD_PERFORMANCE':
      newSalary = initialSalary + increment;
      employeeObject = state[action.id];
      employeeObject.empSalary = newSalary;
      return Object.assign({}, state)
    case 'BAD_PERFORMANCE':
      newSalary = initialSalary - increment;
      employeeObject = state[action.id];
      employeeObject.empSalary = newSalary;
      return Object.assign({}, state)
  }
  return state;
}

const store = createStore(reducer);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <EmployeeApp />
      </Provider>
    );
  }
  
}


