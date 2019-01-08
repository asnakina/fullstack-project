import React, { Component } from 'react';
import {getAllLocations} from '../services/locations';
import {getAllReviews} from '../services/reviews';
import {createReview} from '../services/reviews';
import ReviewsView from './Reviews/ReviewsView';
import ReviewForm from './Reviews/ReviewForm';
import '../App.css';

export default class LocationsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    reviewFormData: {
      description: '' },
    locations: [],
    reviews: []
    // selectedArea: ''
    }
    this.getReviews = this.getReviews.bind(this);
    this.getLocations = this.getLocations.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.createReview = this.handleReview.bind(this);
  }

  async componentDidMount() {
    this.getReviews();
    this.getLocations()
  }

//Get
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

//Post
  async handleSubmit(e) {
    e.preventDefault();
    await createReview(this.state.reviewFormData);
    this.getReviews();
  }
  // handleChange() {
  //   this.setState({selectedArea});
  // }

  handleChange(e) {
    //name is description in this case
    const {name, value} = e.target
    this.setState(prevState => (
      {
        reviewFormData: {
          //in a previous state of credentials add, spread operator makes shallow copy of the object (dynamic)
          //go through my form and see name matches and change the value
          ...prevState.reviewFormData,
          [name] : value
        }
      }
    ))
  }

//Delete
  // handleDelete(id) {
  //   await axios.delete();
  //   this.getReviews();
  // }

   render() {
     return (
       <div>
          <h2>Locations:</h2>
            <div className="AllLocations">
              {this.state.locations.map(theLocation => (
                 <div key={theLocation.id}>
                   <h3>{theLocation.name}</h3>
                   <h3>{theLocation.address}</h3>
                   <h3>{theLocation.lat}{theLocation.lng}</h3>
                   <br></br>
                   <ReviewsView reviews={this.state.reviews.filter(review => theLocation.id === review['location_id'])}/>
                </div>
               )
             )
           }
        </div>
        <ReviewForm onChange={this.handleChange} onSubmit={this.handleSubmit} reviewFormData={this.state.reviewFormData.description} />
      </div>
    )
  }
}
