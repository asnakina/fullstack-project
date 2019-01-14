import React, { Component } from 'react';
import decode from 'jwt-decode'; //package to decode a token for id-s
//we import login for ...
import { login } from '../services/auth';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

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
    const decodedToken = decode(tokenData.jwt)
    this.props.setLoggedInUser(decodedToken)
  }

  handleChange(e) {
  //name is email or password
   const {name, value} = e.target
    this.setState(prevState => (
      {
        credentials: {
          //in a previous state of credentials add, spread operator makes shallow copy of the object (dynamic)
          //go through my form and see name matches and change the value
          ...prevState.credentials,
          [name] : value
        }
      }
    ))
  }

  render() {
    if (this.state.redirectToProfile) return (<Redirect to="/profile" />)
    return (
      <div className="LoginRegister">
       <LoginForm handleChange={this.handleChange}
                  handleLogin = {this.handleLogin}
                  login={this.state.credentials} />
       <RegisterForm handleChange={this.handleChange}
                     register={this.state.credentials}
                     />
      </div>
    )
  }
}

export default AuthForm;
