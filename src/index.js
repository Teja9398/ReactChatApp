import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Weather from './components/Weather';
import ChatApp from './components/ChatApp';
import reportWebVitals from './reportWebVitals';
import ToDoList_V1 from './components/ToDoList_V1';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmchblndKfftuhlO3RFa_OEuumtY1xMfk",
  authDomain: "dtchatapp.firebaseapp.com",
  databaseURL: "https://dtchatapp-default-rtdb.firebaseio.com",
  projectId: "dtchatapp",
  storageBucket: "dtchatapp.appspot.com",
  messagingSenderId: "350648199324",
  appId: "1:350648199324:web:6d1b50026b6f77727fa559",
  measurementId: "G-V0PE3CJV9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <ChatApp /> 

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
