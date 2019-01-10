import React from 'react';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrls: [],
      currentImgIndex: 0
    }
    this.previousImg = this.previousImg.bind(this)
    this.nextImg = this.nextImg.bind(this)
  }


 previousImg() {
   // 1 2 3 4 5. lastIndex = 4.
   const lastIndex = imgUrls.length - 1;
   const {currentImgIndex} = this.state;
   //clarify about shouldResetIndex, what it's for
   const shouldResetIndex = currentImgIndex === 0;
   const index = shouldResetIndex ? lastIndex : currentImgIndex - 1;

   this.setState({
     currentImgIndex: index
   });
 }

 nextImg() {
   const lastIndex = imgUrls.length - 1;
   const {currentImgIndex} = this.state;
   const shouldResetIndex = currentImgIndex === lastIndex;
   const index = shouldResetIndex ? 0 : currentImgIndex + 1;

   this.setState({
     currentImgIndex: index
   });
  }

  render() {
    return (
      <div className="carousel">
         <ImagesSlides url={ imgUrls[this.state.currentImgIndex] } />
         <button onClick={this.previousImg}>Prev</button>
         <button onClick={this.nextImg}>Next</button>
      </div>
    )
  }
}

export default Carousel;
