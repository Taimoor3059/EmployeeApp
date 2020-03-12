import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';


function mapStateToProps(state) {
    return {
        data: state
    }
}

function dispatchToProps(dispatch) {
    goodPerformance: id => dispatch({
        type: "GOOD_PERFORMANCE",
        id: id
    });
    badPerformance: id => dispatch({
        type: "BAD_PERFORMANCE",
        id: id
    })
}


export default class EmployeeApp extends React.Component {
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
