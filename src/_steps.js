/* 
Steps to use firebase
1) create a project on console.firebase.google.com
2) npm install firebase 
3) registe web app in firebase
4) copy firebase config settings to firebase.init.js 
5) export default app;
6) import firebase app from firebase.init.js into app.js
7) import {getAuth} from './firebase/auth' into app.js and create a variable and send app like const auth=getAuth(app);
8) Turn on google authentication (firebase>authentication>enable google sign in)
9) create google provider
10) sent auth & provider by calling signInWithPopup(auth, provider) finc.
11) handle .then(if successful).catch(if unseccessful)
*/