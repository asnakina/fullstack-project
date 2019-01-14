import React from 'react';

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
           <div className="videoStyle" loop autoplay>
              <iframe width="728" height="410" src="https://www.youtube.com/embed/yrZLjh9DI_I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loop autoPlay></iframe>
           </div>
        </div>
        {/*<video loop autoPlay>
          <source src="https://www.youtube.com/watch?v=SRKwHAHIqow" type="video/mp4" />
        </video>
       {/*<img src={ require('../images/pose2.gif') } alt={'main'} />*/}
    </div>
  )
}

export default AboutView;
