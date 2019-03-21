import firebase from 'firebase';

export default function initializeFirebase(){
 const config = {
  apiKey: "AIzaSyARXJnsMCgrlq2ZEbjRokBZhxxvtpt99EY",
  authDomain: "bbdnepal-f5d92.firebaseapp.com",
  databaseURL: "https://bbdnepal-f5d92.firebaseio.com",
  projectId: "bbdnepal-f5d92",
  storageBucket: "bbdnepal-f5d92.appspot.com",
  messagingSenderId: "558448678081"
};
firebase.initializeApp(config);
alert("firebase.SDK_VERSION")
} 