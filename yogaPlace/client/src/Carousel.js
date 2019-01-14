import React, { Component } from 'react';
import '../App.css';

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgUrls: [
        require('../images/1slide.jpg'),
        require('../images/2slide.jpg'),
        require('../images/3slide.jpg')
        // "https://www.justrunlah.com/wp-content/uploads/2015/11/yoga-1.jpg",
        // "http://fivesisters.co/wp-content/uploads/2018/04/istock-499609170.jpg"
      ],
      currentImgIndex: 0
     }
    this.previousImg = this.previousImg.bind(this)
    this.nextImg = this.nextImg.bind(this)
  }

 async setTimer() {
  for(let i = 0; i < 10; i++) {
   await setTimeout(this.setState({ currentImgIndex: (this.state.currentImgIndex+1)%this.state.imgUrls.length }), 4000);
   }
 }

 previousImg() {
   if(this.state.currentImgIndex == 0) {
     this.setState({
       currentImgIndex: this.state.currentImgIndex.length-1
     })
   } else {
     this.setState({
       currentImgIndex: (this.state.currentImgIndex-1)
     })
   }
   this.setTimer()
 }

   // 1 2 3 4 5. lastIndex = 4.
   // this.setTimer();
   //switch(this.state.currentImgIndex) {
   // case 0:
   // return this.setState({currentSlide: 1})
   // case 1:
   // return this.setState({currentSlide: 2})
   //default:
   //console.log('next slide error')
   // const lastIndex = imgUrls.length - 1;
   // const {currentImgIndex} = this.state;
   // //clarify about shouldResetIndex, what it's for
   // const shouldResetIndex = currentImgIndex === 0;
   // const index = shouldResetIndex ? lastIndex : currentImgIndex - 1;
   //
   // this.setState({
   //   currentImgIndex: index
   // });
 // }

 nextImg() {
   // this.setState({
   //   currentImgIndex: (this.state.currentImgIndex+1)%this.state.imgUrls.length
   // })
   // this.setTimer();

   if(this.state.currentImgIndex == this.state.currentImgIndex - 1) {
     this.setState({
       currentImgIndex: this.state.currentImgIndex
     })
   } else {
     this.setState({
       currentImgIndex: (this.state.currentImgIndex+1)
     })
   }
   this.setTimer()
   //switch(this.state.currentImgIndex) {
   // case 0:
   // return this.setState({currentSlide: 1})
   // case 1:
   // return this.setState({currentSlide: 2})
   //default:
   //console.log('next slide error')
   // const lastIndex = imgUrls.length - 1;
   // const {currentImgIndex} = this.state;
   // const shouldResetIndex = currentImgIndex === lastIndex;
   // const index = shouldResetIndex ? 0 : currentImgIndex + 1;
   //
   // this.setState({
   //   currentImgIndex: index
   // });
  }

  clearTimeout() {
    this.setState({
      time: 0
    })
  }

  componentDidMount() {
    this.setTimer();
}

  render() {
    return (
      <div className="carousel">
        <img src={ this.state.imgUrls[this.state.currentImgIndex] } />
         {/*<button onClick={this.previousImg}>Prev</button>
         <button onClick={this.nextImg}>Next</button>*/}
      </div>
    )
  }
}

export default Carousel;


// Bootstrap
// function Carousel(props) {
//   return (
// <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
//   <ol class="carousel-indicators">
//     <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//   </ol>
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img class="d-block w-100" src="../images/1slide.jpg" alt="First slide">
//     </div>
//     <div class="carousel-item">
//       <img class="d-block w-100" src="../images/2slide.jpg" alt="Second slide">
//     </div>
//     <div class="carousel-item">
//       <img class="d-block w-100" src="../images/3slide.jpg" alt="Third slide">
//     </div>
//   </div>
//   <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="sr-only">Previous</span>
//   </a>
//   <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="sr-only">Next</span>
//   </a>
// </div>
// )}
// export default Carousel;
