import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBQE1rZaeVcLdhjLDhfy2OP5vg9wZJUPP4",
    authDomain: "carclub-de5aa.firebaseapp.com",
    databaseURL: "https://carclub-de5aa.firebaseio.com",
    projectId: "carclub-de5aa",
    storageBucket: "carclub-de5aa.appspot.com",
    messagingSenderId: "575870150744"
};

app.initializeApp(config);

export default app;