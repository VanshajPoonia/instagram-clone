import firebase from "firebase/app";
// import firebaseConfig from "../credentials";
import "firebase/auth" ;

const firebaseConfig = {
  apiKey: "AIzaSyCcm3WXb6VEY5OVb01Svcp75vEsaGOzlRY",
  authDomain: "instagramclone-e2ca4.firebaseapp.com",
  projectId: "instagramclone-e2ca4",
  storageBucket: "instagramclone-e2ca4.appspot.com",
  messagingSenderId: "1088056146974",
  appId: "1:1088056146974:web:0308a46b287fc0680a420f",
  measurementId: "G-JS1282J6ZT"
};


firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
