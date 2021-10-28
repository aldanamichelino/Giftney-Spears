import firebase from 'firebase/';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDxOuZZAfEqk1BjIpaucxA3AKUAO8wGm8A",
  authDomain: "giftney-spears.firebaseapp.com",
  projectId: "giftney-spears",
  storageBucket: "giftney-spears.appspot.com",
  messagingSenderId: "212137482369",
  appId: "1:212137482369:web:e7159066373d03e8391580"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
    return firebase.firestore(app);
}

