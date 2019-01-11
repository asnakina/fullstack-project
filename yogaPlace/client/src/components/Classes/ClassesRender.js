import React from 'react';

function ClassesRender(props) {

return (
  <div>
    <h2>Classes:</h2>
     <div className="AllClasses">
     {props.classes.map(oneClass => (
       <div key={oneClass.id}>
         <h3>{oneClass.title}</h3>
         <h3>{oneClass.date}</h3>
         <h3>{oneClass.description}</h3>
      </div>
        )
        )}
      </div>
   </div>
 )
}

export default ClassesRender;
