import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {

  onEmailChange(text){
    this.props.emailChanged(text); 
  }

  onPasswordChange(password){
    this.props.passwordChanged(password); 
  }

  onButtonPress(){
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderError(){
    if(this.props.error){
      return (
        <View style={{ backgroundColor: '#FFF' }}>
          <Text style={ styles.errorTextStyle }>
            { this.props.error }
          </Text>
        </View>
      );
    }
  }

  renderButton(){
    if(this.props.loading){
      return(
        <Spinner size="large"/>
      );
    } 

    return(
      <Button onPress={ this.onButtonPress.bind(this) } >Login</Button>
    );
  }

  render(){
    return(
      <Card>
        <CardSection>
          <Input
            label="Email:"
            placeholder="user@gmail.com"
            onChangeText={ this.onEmailChange.bind(this) }
            value={ this.props.email }
            />
        </CardSection>
        <CardSection>
          <Input
            label="Password:"
            placeholder="password"
            secureTextEntry
            onChangeText= { this.onPasswordChange.bind(this) }
            value={ this.props.password }
          />
        </CardSection>
          { this.renderError() }
        <CardSection>
          { this.renderButton() }
        </CardSection>
      </Card>
    );
  }

}

const styles = {
  errorTextStyle: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center'
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default connect( mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
