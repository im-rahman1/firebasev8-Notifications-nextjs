import "firebase/messaging";
import firebase from "firebase/app";

export const firebaseCloudMessaging = async () => {
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_APP_ID,
    });
    try {
      const messaging = firebase.messaging();
      const status = await Notification.requestPermission();
      if (status && status === "granted") {
        const fcm_token = await messaging.getToken();
        if (fcm_token) {
          // console.log("fcm token", fcm_token);
          return fcm_token;
        }
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }
};
