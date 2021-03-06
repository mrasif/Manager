import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { employeeUpdate } from '../actions';


class EmployeeForm extends Component {

  render(){
    console.log(this.props.employee);
    return (
      <View>
        <CardSection>
          <Input
            label="Name:"
            placeholder="Your name"
            value={ this.props.name }
            onChangeText={ text=> this.props.employeeUpdate({ prop: 'name', value: text }) }
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone:"
            placeholder="Phone number"
            value={ this.props.phone }
            onChangeText={ text=> this.props.employeeUpdate({ prop: 'phone', value: text }) }
          />
        </CardSection>
        <CardSection>
          <Text style={ styles.pickerLabelStyle }>
            Shift:
          </Text>
          <Picker
            style={{ flex:1 }}
            selectedValue={ this.props.shift }
            onValueChange={ day=>this.props.employeeUpdate({ prop: 'shift', value: day }) }
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state, ownProps) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps,{ employeeUpdate })(EmployeeForm);
