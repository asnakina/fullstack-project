import React from 'react';

function ReviewForm(props) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.onSubmit(props.location.id, props.index);
    }}>
       <h2 className="smallHeaders">Your comment:</h2>
       <textarea type='text'
              onChange={(e) => {
                const { value } = e.target
                props.onChange(value, props.index)
              }}
              value={props.reviewFormData[props.index]}
              className="reviewTextArea"
       />
       <br></br>
       <button type="submit" className="submitBtnStyle">Submit</button>
    </form>
  )
}

export default ReviewForm;
