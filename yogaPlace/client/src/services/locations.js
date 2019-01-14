import axios from 'axios';

 async function getAllLocations() {
  console.log('Fetching All locations');
  const response = await axios({
    url: '/api/locations',
    header: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  console.log(response)
  return response.data;
 }

 export {
   getAllLocations
}
