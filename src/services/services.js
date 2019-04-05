const ServiceWorker = {};
const Axios = require('axios');


ServiceWorker.getUserData = (email) => Axios.get(`http://localhost:3004/user/${email}`);

ServiceWorker.createUser = (username,email, city, state, zip, uid) => Axios.post(`http://localhost:3004/user/signup`, {
    username,
    email,
    city,
    state,
    zip,
    uid
  })





export default ServiceWorker;