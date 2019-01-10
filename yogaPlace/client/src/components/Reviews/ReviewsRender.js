import React, { Component } from 'react';
import '../../App.css';

export default class ReviewsRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: null,
      reviewBody: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    //name is description in this case
    const {name, value} = e.target
    this.setState({reviewBody: value});
  }

  render() {
  return (
      <div>
       {this.props.reviews.map(eachReview => (
         <div key={eachReview.id}>
          {this.state.isEditing === eachReview.id
           ?
           (<div>
              <form onSubmit={(e) => {
                 e.preventDefault();
                 this.props.handleUpdate(eachReview.id, this.state.reviewBody);
                 this.setState({
                   isEditing: null,
                   reviewBody: ""
                   })
                  }}>
                 <textarea type="text"
                      name="reviewBody"
                      value={this.state.reviewBody}
                      onChange={this.handleChange}
                      className="editTextArea"
                      />
                 <button className="editDeleteBtn">Submit</button>
               </form>
            </div>)
           :
           <div>
             <h3 className="ReviewsRendering">{eachReview.description}</h3>
             <button onClick={() => {
              this.setState({
                isEditing: eachReview.id,
                reviewBody: eachReview.description
               })
             }}
             className="editDeleteBtn"
             >Edit</button>
             <button onClick={() => {this.props.handleDelete(eachReview.id)}}
             className="editDeleteBtn"
             >Delete</button>
           </div>
          }
        </div>
      ))}
    </div>
   )
  }
}
