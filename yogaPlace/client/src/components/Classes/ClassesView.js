import React, { Component } from 'react';
import {getAllClasses} from '../services/classes';
import {getAllLocations} from '../services/locations';
import '../App.css';

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
       <div>
        <h2>Locations:</h2>
        <div className="AllLocations">
          {this.state.locations.map(theLocation => (
             <div key={theLocation.id}>
               <h3>{theLocation.name}</h3>
               <h3>{theLocation.address}</h3>
               <h3>{theLocation.lat}{theLocation.lng}</h3>
               <br></br>
               <div classes={this.state.classes.filter(theClass => the_class.id === the_class_locations_['the_class_id'])}/>
            </div>
          <h2>Classes:</h2>
            <div className="AllClasses">
              {this.state.classes.map(oneClass => (
                 <div key={oneClass.id}>
                   <h3>{oneClass.title}</h3>
                   <h3>{oneClass.date}</h3>
                   <h3>{oneClass.description}</h3>
                </div>
                )
              )
             }
          </div>
        </div>
     )
  }
}
