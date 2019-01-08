import React from 'react';


function ReviewsRender(props) {
  return (
      <div>
       {props.reviews.map(eachReview => (
         <div key={eachReview.id}>
           <h3 className="ReviewsRendering">{eachReview.description}</h3>
           {/*handleChange={props.onChange}*/}
           </div>
         ))}
    </div>
  )
}

export default ReviewsRender;
