const ServiceWorker = {};
const Axios = require('axios');


ServiceWorker.getUserData = (email) => Axios.get(`https://carclub-backend.herokuapp.com/user/${email}`);

ServiceWorker.createUser = (username, email, city, state, zip) => {
    return Axios.post(`https://carclub-backend.herokuapp.com/user/signup`, {
        username,
        email,
        city,
        state,
        zip
    })

}

ServiceWorker.addUID = (username, uid) => {
    return Axios.put(`https://carclub-backend.herokuapp.com/user/addUID`, {username, uid})
}





export default ServiceWorker;