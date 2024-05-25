import { initializeApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCOKqmd-8YEdRcT-3cPWG3if3f-zujAOIk",
    authDomain: "eastar-project.firebaseapp.com",
    projectId: "eastar-project",
    storageBucket: "eastar-project.appspot.com",
    messagingSenderId: "241009390048",
    appId: "1:241009390048:web:bff1b37b3ee00314f57b85",
    measurementId: "G-RGQ9938W71"
};

const firebaseApp = initializeApp(firebaseConfig);

const firestore: Firestore = getFirestore(firebaseApp as FirebaseApp);


export { firebaseApp, firestore };


