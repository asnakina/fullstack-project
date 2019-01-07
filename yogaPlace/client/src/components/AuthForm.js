import React, { Component } forom 'react';
import { login } from '../services/auth';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        email: '',
        password: ''
      },
      redirectToProfile: false
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleLogin(e) {
    e.preventDefault();
    const tokenData = await login(this.state.credentials)
    console.log(tokenData);
    localStorage.setItem('token', tokenData.jwt);
    this.setState({ redirectToProfile: true });
  }

  handleChange(e) {
    const {name, value} = e.target
    this.setState(precState => (
      {
        credentials: {
          ...prevState.credentials,
          [name] : value
        }
      }
    ))
  }

  render() {
    if (this.state.redirectToProfile) return (<Redirect to="/profile" />)
    return (
      <div>
       <LoginForm handleChange={this.handleChange}
        handleLogin = {this.handleLogin}
        login={this.state.credentials} />
      </div>
    )
  }

}

export default AuthForm;
