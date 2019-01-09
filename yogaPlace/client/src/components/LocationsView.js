import React, { Component } from 'react';
// import axios from 'axios';
// import {Redirect} from 'react-router-dom';
import {getAllLocations} from '../services/locations';
import {getAllReviews} from '../services/reviews';
import {createReview} from '../services/reviews';
import {deleteReview} from '../services/reviews';
import {updateReview} from '../services/reviews';
import ReviewsView from './Reviews/ReviewsView';
import ReviewForm from './Reviews/ReviewForm';
import '../App.css';

export default class LocationsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    review: '',
    redirectToProfile: false,
    locations: [],
    reviews: []
    // selectedArea: ''
  }
    this.getReviews = this.getReviews.bind(this);
    this.getLocations = this.getLocations.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.createReview = this.createReview.bind(this);
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
    //const reviews = await services.getAllReviews();
      await this.setState({reviews});
    } catch(e) {
      console.error(e);
    }
  }

//Post
  // async addReview() {
  //   try {
  //     const newReview = await createReview();
  //   }
  // }

  handleChange(e) {
    //name is description in this case
    const {name, value} = e.target
    this.setState({review: value});
  }

  async handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.review);
    const token = localStorage.getItem('token');
    if(this.state.review) {
      const review = await createReview(token, {description: this.state.review, user_id: 1, location_id: 1});
    }
    // this.setState (
    //   {
    //     redirectToProfile: true
    //   }
    // );
    // await this.addReview(this.state.reviewFormData.description);
  }

  // async addReview() {
  //   const token = localStorage.getItem('token');
  //   console.log(token)
  //   const resp = await axios.post(`/reviews/`,
  //       {reviewFormData: this.state.reviewFormData.description},
  //     {headers: {
  //       Authorization: `Bearer ${token}`
  //     }
  //   })
  //   const comment = resp.data
  //   this.setState(prevState => {
  //     return {
  //       comments: [...prevState.comments, comment],
  //       reviewFormData: {
  //         description: ''
  //       }
  //     }
  //   })
  // }

//Delete
  async handleDelete(e) {
      const token = localStorage.getItem('token');
      const review = await deleteReview(token, e.currentTarget.id);
      const reviews = await getAllReviews();
      this.setState(prevState => ({
        ...prevState.reviews,
        reviews: reviews
      }))
  }

//Update
    async handleUpdate(e) {
      e.preventDefault();
        const token = localStorage.getItem('token');
        const review = await updateReview(token, e.currentTarget.id);
        const reviews = await getAllReviews();
        this.setState(prevState => ({
          ...prevState.reviews,
          reviews: reviews
        }))
    }

   render() {
     {/*if(this.state.redirectToProfile)
     return (
       <Redirect to="/profile" />
     )*/}
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
          <div className="SubmitForms">
            <ReviewForm onChange={this.handleChange} onSubmit={this.handleSubmit} reviewFormData={this.state.review} />
            <ReviewForm onChange={this.handleChange} onSubmit={this.handleSubmit} reviewFormData={this.state.review} />
          </div>
        </div>
     )
   }
}
