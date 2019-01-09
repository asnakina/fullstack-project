import React from 'react'

function AboutView(props) {
  return (
    <div>
      <h2>About us:</h2>
        <div className="AboutText">
          <p>The most productive 3 and 2 yoga-classes, where you definatly will spend more time on excersises than on your commite. We value your time, making it productive!</p>
          <p>We are lovely modern yoga studia, place for relaxation and your physical achievements</p>
          <p>Has 2 locations on the South Beach and on the North Beach, both with the ocean view and the access to the beach</p>
          <p>We have retreats in Costa Rica, Thailand and Bali every half a year with fantastic experience and life changing vacations.
          You mind, body and soul will thank you for this!</p>
          <br></br>
        </div>
       <img src={ require('../images/pose2.gif') } alt={'main'} />
    </div>
  )
}

export default AboutView;
