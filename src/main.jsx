import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import './index.css'
// 파이어베이스
import firebase from "firebase/app";
import "firebase/firestore";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Layout />
)

const firebaseConfig = {
  apiKey: "AIzaSyDNF5a0QKJkGXApmi6M3xPxW6mlEx5QM-Y",
  authDomain: "carotm-2dad4.firebaseapp.com",
  projectId: "carotm-2dad4",
  storageBucket: "carotm-2dad4.appspot.com",
  messagingSenderId: "963697722068",
  appId: "1:963697722068:web:8a5a55b2535c1f7b26b141"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();