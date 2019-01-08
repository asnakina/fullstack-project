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

 export {
   getAllReviews,
   getMyReviews
}
