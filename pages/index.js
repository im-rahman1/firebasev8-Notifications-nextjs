/* eslint-disable @next/next/no-script-component-in-head */
import React, { useEffect } from "react";

import firebase from "firebase/app";

import {firebaseCloudMessaging} from "../firebase/webPush";
import { useState } from 'react';

function App() {
  const [fcmToken, setFcmToken] = useState("")

  useEffect(() => {
    setToken();
    async function setToken() {
      try {
        const token = await firebaseCloudMessaging();
        if (token) {
          getMessage();
          console.log(token);
          setFcmToken(token);
        }
      } catch (error) {
        console.log(error);
      }
    }
    function getMessage() {
      const messaging = firebase.messaging();
      messaging.onMessage((message) => console.log("foreground", message));
    }

  }, []);

  return (
    <div className="App">
      <p>
        Use this firebase cloud messaging token to test: 
      </p>
      <h6 style={{maxWidth: '480px'}}>{fcmToken}</h6>
    </div>
  );
}

export default App;
