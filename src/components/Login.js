/** @format */

import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import firebase from "firebase/app";
import { auth } from "../firebase";

const Login = () => {
  return (
    <div id='login-page'>
      <div id='login-card'>
        <h2>Let's Talk..</h2>
        <div
          className='login-button google'
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }>
          <GoogleOutlined />
          Sign IN with Google
        </div>
        <br />
        <br />
        <div
          className='login button facebook'
          onClick={() => {
            alert("sorry but this functionality hasn't implemented yet");
          }}>
          <FacebookOutlined />
          Sign In with faceBook
        </div>
      </div>
    </div>
  );
};
export default Login;
