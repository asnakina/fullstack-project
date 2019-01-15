import React, { Component } from 'react';
import decode from 'jwt-decode'; //package to decode a token for id-s
//we import login for ...
import { login } from '../services/auth';
import { registerServices } from '../services/auth';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {login:{
        email: '',
        password: ''
      }, register:{
        email: '',
        password: ''
      }},
      redirectToProfile: false
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleChangeRegister = this.handleChangeRegister.bind(this);
  }

  async handleLogin() {
    const tokenData = await login(this.state.credentials.login)
    console.log(tokenData);
    localStorage.setItem('token', tokenData.jwt);
    this.setState({ redirectToProfile: true });
    const decodedToken = decode(tokenData.jwt)
    this.props.setLoggedInUser(decodedToken)
  }

  async handleRegister(e) {
    e.preventDefault();
    await registerServices(this.state.credentials.register)
    const userData = this.state.credentials.register
    this.setState(prevState => (
      {
        credentials: {
          //in a previous state of credentials add, spread operator makes shallow copy of the object (dynamic)
          //go through my form and see name matches and change the value
          ...prevState.credentials,
          login: userData
          }
        }
    ))
    this.handleLogin();
  }

  handleChangeLogin(e) {
  //name is email or password
   const {name, value} = e.target
    this.setState(prevState => (
      {
        credentials: {
          //in a previous state of credentials add, spread operator makes shallow copy of the object (dynamic)
          //go through my form and see name matches and change the value
          ...prevState.credentials,
          login: {
            ...prevState.credentials.login,
            [name] : value
          }
        }
      }
    ))
  }

  handleChangeRegister(e) {
  //name is email or password
   const {name, value} = e.target
    this.setState(prevState => (
      {
        credentials: {
          //in a previous state of credentials add, spread operator makes shallow copy of the object (dynamic)
          //go through my form and see name matches and change the value
          ...prevState.credentials,
          register: {
            ...prevState.credentials.register,
            [name] : value
          }
        }
      }
    ))
  }

  render() {
    if (this.state.redirectToProfile) return (<Redirect to="/profile" />)
    return (
      <div className="LoginRegister">
       <LoginForm handleChange={this.handleChangeLogin}
                  handleLogin = {this.handleLogin}
                  login={this.state.credentials} />
       <RegisterForm handleChange={this.handleChangeRegister}
                     register={this.state.credentials}
                     handleRegister = {this.handleRegister} />
      </div>
    )
  }
}

export default AuthForm;
