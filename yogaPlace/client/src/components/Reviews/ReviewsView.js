import React, { Component } from 'react';
import ReviewsRender from './ReviewsRender';

export default class ReviewsView extends Component {
  constructor(props) {
    super(props)
  }

   render() {
     return (
       <div>
          <h2>Reviews:</h2>
          <ReviewsRender reviews={this.props.reviews}
                         handleUpdate={this.props.handleUpdate}
                         handleDelete={this.props.handleDelete}/>
       </div>
     )
   }
}
