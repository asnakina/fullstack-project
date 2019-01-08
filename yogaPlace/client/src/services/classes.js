import axios from 'axios';

async function getAllClasses() {
  console.log('Fetching all classes');
  const response = await axios({
    url: '/classes',
    header: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  console.log(response)
  return response.data;
 }

async function getMyClasses() {
  console.log('Fetching my classes');
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
   getAllClasses,
   getMyClasses
 }
