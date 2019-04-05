// import * as firebase from 'firebase';

const ServiceWorker = {};

const axios = require('axios');

// Make a request for a user with a given ID
axios.get('http://localhost:3004/user/syed')
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })

// axios.post('https://carclub-backend.herokuapp.com/signup/', {
//   username: 'yfo00oe',
//   email: 'maif0iil@email.com',
//   picture: 'sfd',
//   city: 'city',
//   state: 'NY',
//   zip: 11218
// })
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// });


// export default ServiceWorker;