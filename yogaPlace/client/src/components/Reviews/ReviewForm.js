import React from 'react';

function ReviewForm(props) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.onSubmit(props.location.id);
    }}>
       <h2>Your comment:</h2>
       <input type='text'
              onChange={props.onChange}
              value={props.reviewFormData}
       />
       <br></br>
       <button type="submit" className="submitBtnStyle">Submit</button>
    </form>
  )
}

export default ReviewForm;
