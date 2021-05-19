import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyDkoZb1Wo3tFpXWpONC-JcImBERNGPzDKk",
  authDomain: "case-preparo-f3ef7.firebaseapp.com",
  databaseURL: "https://case-preparo-f3ef7-default-rtdb.firebaseio.com",
  projectId: "case-preparo-f3ef7",
  storageBucket: "case-preparo-f3ef7.appspot.com",
  messagingSenderId: "572244145991",
  appId: "1:572244145991:web:f029b916db0104f6c1fe62",
});
