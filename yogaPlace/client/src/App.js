import React, { Component } from 'react';
import decode from 'jwt-decode'; //package to decode a token for id-s
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
  constructor(props) {
    super(props);
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
      isLoggedIn: false,
      loggedInUser: {}
    }
    this.setLoggedInUser = this.setLoggedInUser.bind(this);
    this.removeLoggedInUser = this.removeLoggedInUser.bind(this);
  }

//   handleChange(e) {
// // why do we write like this?
// // can we substitute prevState with another code?
//     const {name, value} = e.target
//     this.setState(prevState => (
//       {
//         loggedInUser: {
//           ...prevState.login,
//           [name] : value
//         }
//       }
//     ))
//   }

componentDidMount() {
  if (localStorage.getItem("token")) {
    this.getLoggedInUser();
  }
}

  getLoggedInUser() {
    const token = localStorage.getItem("token");
    const decodedToken = decode(token);
    this.setLoggedInUser(decodedToken);
  }

  setLoggedInUser(user) {
    this.setState({
      loggedInUser: user
    })
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

  removeLoggedInUser() {
    this.setState({
      loggedInUser: {}
    })
  }

  render() {
    return (
      <Router>
       <div className="App">
         <div className="navBarContent">
           <div className="navBar">
             <NavBar loggedInUser={this.state.loggedInUser}/>
           </div>
           <div className="headerContent">
            <header>
              <h1>Yoga Place</h1>
              <audio ref="audio" src={require('./images/Samba.mp3')} controls autoPlay loop>
                 <param name="autoplay" value="true" />
              </audio>
              {/*<img className="animation" src={require('./images/animation1.jpg')} alt={'main'} />*/}
            </header>
            <div className="content">
            {/*making fake routes:*/}
              <Route exact path="/" component={MainView} />
              <Route exact path="/about" component={AboutView} />
              <Route exact path="/locations"
                render={((props) => <LocationsView
                  {...props}
                  loggedInUser = {this.state.loggedInUser}
                />)}
              />
              <Route exact path="/exercises" component={ExercisesView} />
              <Route exact path="/retreats" component={RetreatsView} />
              <Route exact path="/the_classes" component={ClassesView} />
              {/*we can give "component" or "render"*/}
              <Route path="/profile"
                render={((props) => <Profile
                 {...props}
                 removeLoggedInUser={this.removeLoggedInUser}
              />)}/>
              <Route path="/auth"
                render={((props) => <AuthForm
                  {...props}
                  setLoggedInUser= {this.setLoggedInUser}
              />)}/>
            </div>
          </div>
         </div>
       </div>
      </Router>
    );
  }
}

export default App;
