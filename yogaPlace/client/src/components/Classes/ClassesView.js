import React, { Component, Fragment } from 'react';
import {getAllClasses} from '../../services/classes';
import {getAllLocations} from '../../services/locations';
import '../../App.css';
import ClassesRender from './ClassesRender';

export default class ClassesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [],
      locations: []
    }
    this.getClasses = this.getClasses.bind(this);
    this.getLocations = this.getLocations.bind(this);
  }

  async componentDidMount() {
    this.getClasses();
    this.getLocations()
  }

//Get
  async getClasses() {
    try {
      const classes = await getAllClasses();
    //const classes = await services.getAllClasses();
       this.setState({classes});
    } catch(e) {
      console.error(e);
    }
  }

//Get
  async getLocations() {
    try {
      const locations = await getAllLocations();
       this.setState({locations});
    } catch(e) {
      console.error(e);
    }
  }

//AddFavoriteClass
   // async addFavClass() {
   //   try {
   //     const
   //   }
   // }

//UnfavoriteClass


//for save access of the data in Location. to fill out yet.
 checkClasses = (theLocation) =>{
   try {
    return <ClassesRender classes={theLocation.the_classes} />
   }
   catch(e) {
     return <Fragment>" "</Fragment>
   }
 }

 //Fragment - is a div.

   render() {
        //  {/*{this.state.theLocation.the_classes ? <ClassesRender classes={this.state.theLocation.the_classes} /> :" " }*/}
     return (
       <div className="classesLocations">
         <h2 className="mediumHeader">Schedule:</h2>
           <div className="LocationsReviewsSubmit">
              <span>Locations:</span>
                {this.state.locations.map(theLocation => (
                 <div key={theLocation.id}>
                   <h3>{theLocation.name}</h3>
                   <h3>{theLocation.address}</h3>
                   <h3>{theLocation.lat}{theLocation.lng}</h3>
                   <br></br>
                   {this.checkClasses(theLocation)}
                   {/*//it will give us an array of classes:*/}
                   {/*<ClassesRender classes={this.state.locations.the_classes} />*/}
                   {/* {console.log(this.state.theLocation.the_classes)} */}
                   {/*<ClassesRender classes={this.state.classes.filter(theClass => theClass.id === theLocation[`the_class_id`])} />*/}
                   {/*//we map the classes in ClassesRendering component*/}
                 </div>
                )
               )
             }
          </div>
      </div>
     )
   }
}
