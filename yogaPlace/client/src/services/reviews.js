import axios from 'axios';

async function getAllReviews() {
  console.log('Fetching All reviews');
  const response = await axios({
    url: '/reviews'
    // header: {
    //   'Authorization': `Bearer ${localStorage.getItem('token')}`
    // }
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

 async function createReview(token, formData) {
    try {
      console.log(localStorage.getItem('token'));
      const review = await axios.post('/reviews', formData, {
        headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
      }
    );
    return review;
  } catch(e) {
    console.log(e)
  }
}

 async function updateReview(token, id, formData) {
   try {
     const review = await axios.put(`/reviews/${id}`, formData, {
     headers: {
           'Authorization': `Bearer ${token}`
         }
       }
    )
    return review;
  } catch(e) {
    console.log(e)
   }
 }

 async function deleteReview(token, id) {
   try {
     const review = await axios.delete(`/reviews/${id}`, {
     headers: {
           'Authorization': `Bearer ${token}`
         }
    });
    return review;
   } catch(e) {
    console.log(e)
  }
 }

 export {
   getAllReviews,
   getMyReviews,
   createReview,
   updateReview,
   deleteReview
}
