import axios from 'axios';

 async function login(credentials) {
  const token = await axios.post('/api/user_token',
  {
    "auth": credentials
  });
  console.log(token.data);
  return token.data
 }

 async function registerServices(credentials) {
  const token = await axios.post('api/user_register',
  {
    "auth": credentials
  });
  console.log(token.data);
  return token.data
 }

 export {
  login,
  registerServices
}
