import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CreateStore } from 'redux';
import { Provider } from 'react-redux';
import EmployeeApp from './src/EmployeeApp';


const initState = {
  1: {
    emid: 1,
    empName: 'Employee One',
    empSalary: '10000.0'
  },
  2: {
    emid: 2,
    empName: 'Employee Two',
    empSalary: '12000.0'
  },
  3: {
    emid: 3,
    empName: 'Employee Three',
    empSalary: '13000.0'
  },
  4: {
    emid: 4,
    empName: 'Employee Four',
    empSalary: '14000.0'
  },
  5: {
    emid: 5,
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
    initialSalary = state[action.id].empSalary
  }


  switch (action.type) {
    case value:
      
      break;
  
    default:
      break;
  }
}


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
