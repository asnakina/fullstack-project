import React from 'react'

function AboutView(props) {
  return (
    <div className="aboutTextContent">
      <h2 className="mediumHeader">About us:</h2>
        <div className="aboutText">
           <ul>
              <li>The most productive 3- and 2-hours yoga classes, where you definatly will spend more time on excersises than on your commite. We value your time, making it productive!</li>
              <li>We are lovely modern yoga studia, place for relaxation and your physical achievements</li>
              <li>Has 2 locations on the South Beach and on the North Beach, both with the ocean view and the access to the beach</li>
              <li>We have retreats in Costa Rica, Thailand and Bali every half a year with fantastic experience and life changing vacations.
              You mind, body and soul will thank you for this!</li>
           </ul>
        </div>
       {/*<img src={ require('../images/pose2.gif') } alt={'main'} />*/}
    </div>
  )
}

export default AboutView;
