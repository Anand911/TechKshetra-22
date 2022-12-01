import Slider from "./Slider";
import React3D from "../assets/google.png";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC5JtK5ADTrUkB9wLHkgz3shODRdvzgI2M",
  authDomain: "techkshetra-7fdd.firebaseapp.com",
  projectId: "techkshetra-7fdd",
  storageBucket: "techkshetra-7fdd.appspot.com",
  messagingSenderId: "498066870222",
  appId: "1:498066870222:web:8af9fc696ebf518b66259f",
  measurementId: "G-S0ZLDYQC86"
};

firebase.initializeApp(firebaseConfig);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /dashboard after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/dashboard',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
};

const Login = () => {
  const words = [
    "TECHKSHETRA",
    "*",
    "2022",
    "*",
    "WORKSHOPS",
    "*",
    "TECHTALKS",
    "*",
    "FOOD",
    "*",
    "BANDSLAM",
    "*",
  ];

  return (
    <div className="w-full mt-24">
      <Slider words={words} />
      <div className="flex flex-col justify-center items-center mx-auto w-72 h-96 my-[6%] bg-white text-black rounded-md">
        <img src={React3D} className="h-16" alt="google"/>
        <h3>Login/Signup with Google</h3>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
      <Slider words={words} />
    </div>
  );
};

export default Login;
