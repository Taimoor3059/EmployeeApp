import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Card, Icon } from 'native-base';


function mapStateToProps(state) {
    return {
        data: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        goodPerformance: id => dispatch({
            type: "GOOD_PERFORMANCE",
            id: id
        }),
        badPerformance: id => dispatch({
            type: "BAD_PERFORMANCE",
            id: id
        })
    }
}


 class EmployeeApp extends React.Component {
  render() {
    return (
      <FlatList
      data={Object.values(this.props.data)}
      render={ (item) => {
        <Card style={styles.container}>
            <View style={styles.idContainer}>
                <Text style={styles.idText}>
                    {item.empid}
                </Text>
            </View>
            <View style={styles.nameAndSalaryContainer}>
                <Text style={styles.nameText}>
                    Name: {item.empName} 
                </Text>
                <Text style={styles.salaryText}>
                    Salary: {item.empSalary.toFixed(2)}
                </Text>
            </View>
            <View style={styles.performanceIconContainer}>
                <TouchableOpacity
                    onPress = { () => {
                        this.props.badPerformance(item.empid)
                    } }
                >
                    <Icon
                         ios="ios-thumbs-down"
                         android="md-thumbs-down"
                         style={styles.badPerformance}
                    />

                </TouchableOpacity>

                <TouchableOpacity
                    onPress = { () => {
                        this.props.goodPerformance(item.empid)
                    } }
                >
                    <Icon
                         ios="ios-thumbs-up"
                         android="md-thumbs-up"
                         style={styles.goodPerformance}
                    />

                </TouchableOpacity>
                
                
            </View>
        </Card>
      } }
      keyExtractor={item => item.empid.toString()}
      >
          
      </FlatList>
    );
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
