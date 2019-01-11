import React, { Component } from 'react';
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

   render() {
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
                   {/*//it will give us an array of classes:*/}
                   <ClassesRender classes={this.state.classes.filter(theClass => theClass.id === theLocation.id)} />
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
