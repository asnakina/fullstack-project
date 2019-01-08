import React from 'react';

function ReviewForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
       <h2>Your comment:</h2>
       <input type='text'
              onChange={props.onChange}
              value={props.reviewFormData.description}
       />
       <br></br>
       <button type="submit">Submit</button>
    </form>
  )
}

export default ReviewForm;
