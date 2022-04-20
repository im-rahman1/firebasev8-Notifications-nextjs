importScripts("https://www.gstatic.com/firebasejs/8.9/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.9/firebase-messaging.js");

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
  });

  firebase.messaging();
  //background notifications will be received here
  firebase
    .messaging()
    .setBackgroundMessageHandler((payload) => console.log("payload", payload));
}
