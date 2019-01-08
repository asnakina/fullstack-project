import React, { Component } from 'react';
import {getAllLocations} from '../services/locations';
import {getAllReviews} from '../services/reviews';
import ReviewsView from './Reviews/ReviewsView';


export default class LocationsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      reviews: []
    }
    this.getReviews = this.getReviews.bind(this);
    this.getLocations = this.getLocations.bind(this);
    //this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    this.getReviews();
    this.getLocations()
  }

  // handleChange() {
  //   this.setState({
  //     selectedArea
  //   });
  // }

  async getLocations() {
    try {
      const locations = await getAllLocations();
       this.setState({locations});
    } catch(e) {
      console.error(e);
    }
  }

  async getReviews() {
    try {
      const reviews = await getAllReviews();
      await this.setState({reviews});
    } catch(e) {
      console.error(e);
    }
  }

   render() {
     return (
       <div>
          <h2>Locations:</h2>
          {this.state.locations.map(theLocation => (
            <div key={theLocation.id}>
               <h3>{theLocation.name}</h3>
               <h3>{theLocation.address}</h3>
               <h3>{theLocation.lat}{theLocation.lng}</h3>
               {/*{this.state.reviews.filter(review => theLocation.id === review['location_id'])}*/}
               <ReviewsView reviews={this.state.reviews}/>
            </div>
        ))}
      </div>
      )
  }
}
