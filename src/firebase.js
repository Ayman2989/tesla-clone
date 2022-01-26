import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDIDF3y669EDRQ7hCoWLxuURoe0IWpl1Tc",
  authDomain: "tesla-clone-191f6.firebaseapp.com",
  projectId: "tesla-clone-191f6",
  storageBucket: "tesla-clone-191f6.appspot.com",
  messagingSenderId: "368789301603",
  appId: "1:368789301603:web:fd806d3fbc4c9a92b54b56",
  measurementId: "G-SJQMLLZB1J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };
