// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBQTHw7hZ1SKauB6t1EHz3TsVIEby-tOo",
    authDomain: "shop-dc83c.firebaseapp.com",
    projectId: "shop-dc83c",
    storageBucket: "shop-dc83c.appspot.com",
    messagingSenderId: "821192775271",
    appId: "1:821192775271:web:ef4af5b5e5bff1c5eaa6c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app