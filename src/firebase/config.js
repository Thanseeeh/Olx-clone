import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAo0ohdm_rXM_CNIcMG56eP49-ws9mzuv0",
    authDomain: "olx-clone-43916.firebaseapp.com",
    projectId: "olx-clone-43916",
    storageBucket: "olx-clone-43916.appspot.com",
    messagingSenderId: "386118102195",
    appId: "1:386118102195:web:c737b03157e2e1214c54c6",
    measurementId: "G-8E6DJ9L5WL"
  };

  export default firebase.initializeApp(firebaseConfig)