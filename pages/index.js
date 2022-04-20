/* eslint-disable @next/next/no-script-component-in-head */

import React, { useEffect } from "react";

import firebase from "firebase/app";

import {firebaseCloudMessaging} from "../firebase/webPush";

function App() {
  useEffect(() => {
    setToken();

    async function setToken() {

      try {
        const token = await firebaseCloudMessaging();
        if (token) {
          getMessage();
          console.log(token)
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
      <h1>home</h1>
    </div>
  );
}

export default App;
