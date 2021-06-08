import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';

import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-2jQ8kg7wul8aeeDsqntiVxosknEbzn4",
  authDomain: "cart-bd4e3.firebaseapp.com",
  projectId: "cart-bd4e3",
  storageBucket: "cart-bd4e3.appspot.com",
  messagingSenderId: "388773986332",
  appId: "1:388773986332:web:3fe553bb498d6d5fe05fd9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


