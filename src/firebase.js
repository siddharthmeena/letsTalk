/** @format */

import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYpiqYVW-N4YrjIN2os5xIut94nOJ8D6o",
  authDomain: "mychat-fa9a4.firebaseapp.com",
  projectId: "mychat-fa9a4",
  storageBucket: "mychat-fa9a4.appspot.com",
  messagingSenderId: "1053666511504",
  appId: "1:1053666511504:web:f5962af7bea2d287916615",
};

export const auth = firebase.initializeApp(firebaseConfig).auth();
