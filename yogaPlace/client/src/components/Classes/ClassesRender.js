import React from 'react';

function ClassesRender(props) {

return (
  <div>
    <h2>Classes:</h2>
     <div className="ClassesRendering">
      {props.classes.map(oneClass => (
       <div key={oneClass.id}>
         <h3 className="classTitle">{oneClass.title}</h3>
         <h3 className="classDate">{oneClass.date}</h3>
         <h3 className="classDescription">{oneClass.description}</h3>
       </div>
       ))}
      </div>
   </div>
  )
}

export default ClassesRender;
