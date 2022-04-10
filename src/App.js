
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';
import './App.css';
import app from './firebase.init';

const auth = getAuth(app);

function App() {

  const [user, setUser] = useState({})

  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user)
      })
      .catch(error => {
        console.error('Error:', error);
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(() => {
        //An error happened
        setUser({});
      })
  }

  const handleGitSignIn = () => {
    signInWithPopup(auth, gitProvider)
      .then(result => {
        setUser(result.user)
        console.log(result.user)
      })
      .catch(error => {
        console.error(error)
      })
  }
  return (
    <div className="App">

      {
        user.uid ? <button onClick={handleSignOut}>Sign Out</button> : <>
          <button onClick={handleGoogleSignIn}>Google sign in</button>
          <button onClick={handleGitSignIn}>GitHub Sign In</button>
        </>
      }

      <h2>Name: {user.displayName}</h2>
      <p>I Know your Email Address: {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
