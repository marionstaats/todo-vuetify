import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCMlXcg4rJ23vGa3xTonYFMgFadsybdPCc",
    authDomain: "todo-vuetify-88692.firebaseapp.com",
    projectId: "todo-vuetify-88692",
    storageBucket: "todo-vuetify-88692.appspot.com",
    messagingSenderId: "191575246999",
    appId: "1:191575246999:web:d612f032c4b3d33aab81d2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;