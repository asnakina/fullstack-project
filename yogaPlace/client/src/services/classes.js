import axios from 'axios';

async function getAllClasses() {
  console.log('Fetching all classes');
  const response = await axios({
    url: '/api/the_classes'
    // header: {
    //   'Authorization': `Bearer ${localStorage.getItem('token')}`
    // }
  });
  console.log(response)
  return response.data;
 }

async function getMyClasses() {
  console.log('Fetching my classes');
  const response = await axios({
    url: '/api/the_classes/mine',
    header: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  console.log(response)
  return response.data;
 }

 async function deleteMyClasses(token, id) {
   try {
     const review = await axios.delete('/api/the_classes/${id}/mine', {
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
   getAllClasses,
   getMyClasses,
   deleteMyClasses
 }
