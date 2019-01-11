import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import AuthForm from './components/AuthForm';
import Profile from './components/Profile';
import MainView from './components/MainView';
import AboutView from './components/AboutView';
import LocationsView from './components/LocationsView';
import ExercisesView from './components/ExercisesView';
import RetreatsView from './components/RetreatsView';
import ClassesView from './components/Classes/ClassesView';

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
      },
      isLoggedIn: false
    }
  }

//   handleChange(e) {
// // why do we write like this?
// // can we substitute prevState with another code?
//     const {name, value} = e.target
//     this.setState(prevState => (
//       {
//         login: {
//           ...prevState.login,
//           [name] : value
//         }
//       }
//     ))
//   }

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
         <div className="navBarContent">
           <div className="navBar">
             <NavBar />
           </div>
         <div className="headerContent">
            <header>
              <h1>Yoga Place</h1>
              {/*<img className="animation" src={require('./images/animation1.jpg')} alt={'main'} />*/}
            </header>
            <div className="content">
            {/*making fake routes:*/}
              <Route exact path="/" component={MainView} />
              <Route exact path="/about" component={AboutView} />
              <Route exact path="/locations" component={LocationsView} />
              <Route exact path="/exercises" component={ExercisesView} />
              <Route exact path="/retreats" component={RetreatsView} />
              <Route exact path="/the_classes" component={ClassesView} />
              {this.state.isLoggedIn
                ?
                <Route path="/profile" component={Profile} />
                :
                <Route path="/auth" component={AuthForm} />
              }
            </div>
          </div>
         </div>
       </div>
      </Router>
    );
  }
}

export default App;
