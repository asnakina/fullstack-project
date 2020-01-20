import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
  return (
    <ul className="navBar">
      <li id="imgLi">
        <img src={ require('../images/logo.png') } alt={'main'} />
      </li>
      <li>
        <Link to='/'>Main</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/locations'>Locations/ Reviews</Link>
      </li>
      <li>
        <Link to='/the_classes'>Schedule</Link>
      </li>
      <li>
        <Link to='/retreats'>Retreats</Link>
      </li>
      <li>
        <Link to='/exercises'>Exercises</Link>
      </li>
      {Object.keys(props.loggedInUser).length
        ?
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
        :
        <li>
          <Link to='/auth'>Log In/ Register</Link>
        </li>
      }
      <li id="gifLi">
       <img src={ require('../images/pose4.gif') } alt={'main'} />
      </li>
    </ul>
  );
}

export default NavBar;

                        // Another way of codding the Navbar:
// import MainView from './MainView';
// import AboutView from './AboutView';
// import LocationsView from './LocationsView';
// import ClassesView from './ClassesView';
// import LoginView from './LoginView';

// class NavBar extends Component {
//   constructor(props) {
//     this.state = {
//       screen: 'mainView',
//       locations: '',
//       classes: '',
//       reviews: ''
//     }
// // this.getLocations = this.getLocations.bind(this);
//   }
//
//   setView = (view) => {
//     this.setState({
//       screen: view
//     });
//   }
//
//   render() {
//     let content;
//     switch (this.state.screen) {
//       case 'mainView':
//       content = <MainView />;
//       break;
//       case 'aboutView':
//       content = <AboutView />
//       break;
//       case 'locationsView':
//       content = <LocationView locations={this.state.locations} reviews={this.state.reviews} />;
//       break;
//       case 'classesView':
//       constent = <ClassesView classes={this.state.classes} reviews={this.state.reviews} />;
//       break;
//       case 'loginView':
//       content = <LoginView />
//       break;
//
//       default:
//       content = <MainView />
//     }
//     return (
//       <div className="navBarContent">
//          <div className="navBar">
//            <button onClick={() => this.setView('mainView')} className="navBtn">Main</button>
//            <button onClick={() => this.setView('aboutView')} className="navBtn">About</button>
//            <button onClick={() => this.setView('locationsView')} className="navBtn">Locations</button>
//            <button onClick={() => this.setView('classesView')} className="navBtn">Classes</button>
//            <button onClick={() => this.setView('loginView')} className="navBtn">Login/Register</button>
//          </div>
//          <div className="content">
//            <header>
//               <h1>Yoga Place</h1>
//             </header>
//             <div>
//               { content }
//             </div>
//          </div>
//       </div>
//     )
//   }
// }
