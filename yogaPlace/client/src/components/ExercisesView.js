import React from 'react'

function ExercisesView(props) {
  return (
    <div className="exercisesTextContent">
      <h2 className="mediumHeader">Exercises:</h2>
      <div className="gifs">
        <img src={ require('../images/pose2.gif') } alt={'main'} />
        <img src={ require('../images/pose1.gif') } alt={'main'} />
        <img src={ require('../images/pose3.gif') } alt={'main'} />
        <img src={ require('../images/pose5.gif') } alt={'main'} />
        <img src={ require('../images/pose6.gif') } alt={'main'} />
        <img src={ require('../images/pose7.gif') } alt={'main'} />
       </div>
    </div>
  )
}

export default ExercisesView;
