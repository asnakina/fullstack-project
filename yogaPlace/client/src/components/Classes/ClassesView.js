import React, { Component } from 'react';
import {getAllClasses} from '../services/classes';
import '../App.css';

export default class ClassesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: []
    }
    this.getClasses = this.getClasses.bind(this);
  }

  async componentDidMount() {
    this.getClasses()
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
