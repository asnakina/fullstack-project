import axios from 'axios';

async function getMyReviews() {
  console.log('Fetching reviews');
  const response = await axios({
    url: '/api/reviews/mine',
    header: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  console.log(response)
  return response.data;
 }

 export {
   getMyReviews
 }
