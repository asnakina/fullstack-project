import React, { Component } from 'react';
import '../App.css';

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: 0,
      currentImgIndex: 0,
      imgUrls: [
        require('../images/retreat1.jpg'),
        require('../images/retreat2.jpg'),
        require('../images/retreat3.jpg'),
        require('../images/retreat4.jpg'),
        require('../images/retreat5.jpg'),
        require('../images/retreat6.jpg'),
        require('../images/retreat7.jpg')
      ]
     }
  }

 previousImg = () => {
   if(this.state.currentImgIndex == 0) {
     this.setState({
       currentImgIndex: this.state.imgUrls.length - 1
     })
   } else {
     this.setState({
       currentImgIndex: this.state.currentImgIndex - 1
     })
   }
 }

 nextImg = () => {
   if(this.state.currentImgIndex == this.state.imgUrls.length - 1) {
     this.setState({
       currentImgIndex: 0
     })
   } else {
     this.setState({
       currentImgIndex: this.state.currentImgIndex + 1
     })
   }
 }

  componentDidMount() {
    this.slideShowPlay();
}
  componentWillUnmount() {
    this.slideShowStop();
  }

  slideShowPlay = () => {
    this.setState({
      timer: setInterval(this.nextImg, 2000)
    })
  }
  slideShowStop = () => {
    this.setState({
      timer: 0
    })
  }

  render() {
    return (
      <div className="carousel">
        <div className="carouselWhiteDiv">
           <button onClick={this.previousImg} className="nextPrevBtn">Prev</button>
           <img src={ this.state.imgUrls[this.state.currentImgIndex] } />
           <button onClick={this.nextImg} className="nextPrevBtn">Next</button>
        </div>
      </div>
    )
  }
}

export default Carousel;
