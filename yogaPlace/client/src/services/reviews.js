import axios from 'axios';

async function getAllReviews() {
  console.log('Fetching All reviews');
  const response = await axios({
    url: '/reviews',
    header: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  console.log(response)
  return response.data;
 }

 async function getMyReviews() {
   console.log('Fetching My reviews');
   const response = await axios({
     url: '/reviews/mine',
     header: {
       'Authorization': `Bearer ${localStorage.getItem('token')}`
     }
   });
   console.log(response)
   return response.data;
  }

//async function createReview(token, formData) {
  async function createReview(formData) {
    try {
    const review = await axios.post('/reviews/',
    { "review": formData }
    )
    return review;
     } catch(e) {
        console.log(e)
   }
  }

 export {
   getAllReviews,
   getMyReviews,
   createReview
}
