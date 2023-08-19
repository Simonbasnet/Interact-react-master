import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'
import "firebase/performance";
var firebaseConfig = {
    apiKey: "AIzaSyDZA8JALTGkH2ghTs-x8-y43ZZcxXNlOwY",
    authDomain: "clone-89cd8.firebaseapp.com",
    projectId: "clone-89cd8",
    storageBucket: "clone-89cd8.appspot.com",
    messagingSenderId: "1016889359066",
    appId: "1:1016889359066:web:919624a3b4bc88e941c3e3"
  };
  firebase.initializeApp(firebaseConfig);
  export const firestore=firebase.firestore();
  export default firebase;
  export const auth=firebase.auth();
  export const storage=firebase.storage();
  export const perf = firebase.performance();
  export const db=firebase.database();
  export const Googleprovider=new firebase.auth.GoogleAuthProvider();
  // const signinWithGithub=()=>{
//   const provider=new firebase.auth.GithubAuthProvider();
//   auth.signInWithPopup(provider).catch(alert);
// }
  export const CreateUserProfileDocument=()=>{
    const userRef=firestore.collection('users').doc(auth.currentUser.uid);
    userRef.set({
      username:auth.currentUser.displayName,
      useremail:auth.currentUser.email,
      userphoto:auth.currentUser.photoURL,
      createdAt:firebase.firestore.FieldValue.serverTimestamp(),
      roles:{}
    },{merge:true})
  }