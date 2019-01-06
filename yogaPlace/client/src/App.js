import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import AuthForms from './components/AuthForms';
import Profile from './components/Profile';
import Main from './components/Main';

class App extends Component {
  constructor() {
    super();
    this.state = {
      login: {
        email: '',
        password: ''
      },
      register: {
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  }

  handleChange(e) {
// why do we write like this?
// can we substitute prevState with another code?
    const {name, value} = e.target
    this.setState(prevState => (
      {
        login: {
          ...prevState.login,
          [name] : value
        }
      }
    ))
  }

  handleRegisterChange(e) {
    const {name, value} = e.target
    this.setState(prevState => (
      {
        register: {
          ...prevState.register,
          [name] : value
        }
      }
    ))
  }

  render() {
    return (
      <Router>
        <div className="App">
           <NavBar />
           <Route exact path="/" component={Home} />
           <Route path="/auth" component={AuthForms} />
           <Route path="/profile" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default App;
