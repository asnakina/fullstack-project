import React from 'react';
import {Link} from 'react-router-dom';

function MainView (props) {
  return (
       <div className="mainClass">
         {/*<a href=component={AboutView}>   </a>*/}
         <ul>
           <li>
             <Link to="/exercises">
               <h2 className="breathingLines" id="exercisesText">Exercises</h2>
             </Link>
            </li>
            <li>
             <Link to="/the_classes">
               <h2 className="breathingLines" id="scheduleText">Schedule</h2>
             </Link>
            </li>
            <li>
             <Link to="/about">
               <h2 className="breathingLines" id="aboutText">About</h2>
             </Link>
            </li>
            <li>
             <Link to="/retreats">
               <h2 className="breathingLines" id="retreatsText">Retreats</h2>
             </Link>
            </li>
            <li>
             <Link to="/reviews">
              <h2 className="breathingLines" id="reviewsText">Reviews</h2>
              </Link>
            </li>
            <li>
              <Link to="/profile">
               <h2 className="breathingLines" id="profileText">Profile</h2>
              </Link>
            </li>
         </ul>
      </div>
   )
}

export default MainView;

{/* <img src={ require('../images/mainTropical.jpg')} alt={'main'} />*/}
