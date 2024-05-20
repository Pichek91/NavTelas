import firebase from "firebase"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCbZ1uiIqWn04mqwUU9X3riVPm5hNA35b0",
    authDomain: "navtelas.firebaseapp.com",
    databaseURL: "https://navtelas-default-rtdb.firebaseio.com",
    projectId: "navtelas",
    storageBucket: "navtelas.appspot.com",
    messagingSenderId: "731287791602",
    appId: "1:731287791602:web:30403adc1da33102b06d6b",
    measurementId: "G-7FNZB7P83Z"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const database = firebase.firestore()
  export default database

