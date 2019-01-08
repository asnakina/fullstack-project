import axios from 'axios';

async function getMyClasses() {
  console.log('Fetching reviews');
  const response = await axios({
    url: '/classes/mine',
    header: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  console.log(response)
  return response.data;
 }

 export {
   getMyClasses
 }
