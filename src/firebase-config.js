
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyADve2vcPXjkJEPhwpxQiwjaaQ3y_n2eSM",
    authDomain: "shop-shoe-c573e.firebaseapp.com",
    projectId: "shop-shoe-c573e",
    storageBucket: "shop-shoe-c573e.appspot.com",
    messagingSenderId: "323858669851",
    appId: "1:323858669851:web:e4b92564eb86ad2fec73be"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)