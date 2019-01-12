import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getMyReviews } from '../services/reviews';
import { getMyClasses } from '../services/classes';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      classes: [],
      redirectToAuth: false
    }
    this.logOut = this.logOut.bind(this)
  }

  async componentDidMount() {
    const reviews = await getMyReviews();
    this.setState({
      reviews
    })
    const classes = await getMyClasses();
    this.setState({
      classes
    })
  }

  logOut(e) {
    localStorage.removeItem('jwt');
    this.setState({
      redirectAuth: true
    });
  }

  render() {
    if(this.state.redirectToAuth || !localStorage.getItem('jwt')) {
      return (<Redirect to="/auth" />)
    }
    return (
      <div>
        <h2>Hello User!</h2>
        <button onClick={this.logOut}>Log Out</button>
        <ul>
           <li>
            {this.state.reviews.map(theReview => (
             <div key={theReview.id}>
               <h3>{theReview.description}</h3>
             </div>
           ))}
           </li>
           <li>
            {this.state.classes.map(theClass => (
              <div key={theClass.id}>
                <h3>{theClass.title}</h3>
                <p>{theClass.date}</p>
                <p>{theClass.description}</p>
             </div>
            ))}
           </li>
         </ul>
      </div>
    )
  }
}

export default Profile;
