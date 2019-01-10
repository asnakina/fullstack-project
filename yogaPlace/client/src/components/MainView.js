import React from 'react';

function MainView (props) {
  return (
    <div className="mainClass">
      {/*<a href=component={AboutView}>   </a>*/}
      <h2 className="breathingLines" id="exercisesText">Exercises</h2>
      <h2 className="breathingLines" id="scheduleText">Schedule</h2>
      <h2 className="breathingLines" id="aboutText">About</h2>
      <h2 className="breathingLines" id="retreatsText">Retreats</h2>
      <h2 className="breathingLines" id="reviewsText">Reviews</h2>
      <h2 className="breathingLines" id="profileText">Profile</h2>
    </div>
  )
}

export default MainView;

{/* <img src={ require('../images/mainTropical.jpg')} alt={'main'} />*/}
