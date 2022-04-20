importScripts("https://www.gstatic.com/firebasejs/8.9/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.9/firebase-messaging.js");

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyC5WlJYPnu1YWqMm2WckQttTHYOpjLDkvk",
    authDomain: "notify-next.firebaseapp.com",
    projectId: "notify-next",
    storageBucket: "notify-next.appspot.com",
    messagingSenderId: "351176633522",
    appId: "1:351176633522:web:e345054ed801407dbe2dab",
  });

  firebase.messaging();
  //background notifications will be received here
  firebase
    .messaging()
    .setBackgroundMessageHandler((payload) => console.log("payload", payload));
}
