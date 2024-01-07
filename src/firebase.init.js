// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDByH0U4qFRNvmE-_9axcQ1UWy_aQrCbtc",
    authDomain: "instgram-97616.firebaseapp.com",
    projectId: "instgram-97616",
    storageBucket: "instgram-97616.appspot.com",
    messagingSenderId: "844468792756",
    appId: "1:844468792756:web:0f5e3c01b73abe9a3996e1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;