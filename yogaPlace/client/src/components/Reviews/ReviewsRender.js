import React from 'react';

function ReviewsRender(props) {
  return (
      <div className="ReviewsView">
       {props.reviews.map(eachReview => (
         <div key={eachReview.id}>
           <h3>{eachReview.description}</h3>
           {/*handleChange={props.onChange}*/}
           </div>
         ))}
    </div>
  )
}

export default ReviewsRender;
