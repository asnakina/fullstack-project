import React, { Component } from 'react';

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
