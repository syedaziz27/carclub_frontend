const ServiceWorker = {};
const Axios = require('axios');


ServiceWorker.getUserData = (email) => Axios.get(`http://localhost:3004/user/${email}`);

ServiceWorker.createUser = (username, email, city, state, zip) => {
    return Axios.post(`http://localhost:3004/user/signup`, {
        username,
        email,
        city,
        state,
        zip
    })

}

ServiceWorker.addUID = (username, uid) => {
    return Axios.put(`http://localhost:3004/user/addUID`, {username, uid})
}





export default ServiceWorker;