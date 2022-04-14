import {
  createUserWithEmailAndPassword,
  // GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, provider } from "../auth/firebase";
import { authLogin, authLogout } from "../redux/actions/authActions";

//! LOGIN AND LOGOUT FUNCTIONS
export const logInWithGoogle = (dispatch, navigate) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      //! const credential = GoogleAuthProvider.credentialFromResult(result);
      //! const token = credential.accessToken;
      // The signed-in user info.
      const currentUser = result.user;
      dispatch(authLogin(currentUser));
      navigate("/");
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode, errorMessage);
      // The email of the user's account used.
      const email = error.email;
      alert(email);
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export const registerWithEmailPassword = (email, password, dispatch) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const currentUser = userCredential.user;

      // currentUser.displayName = email;
      dispatch(authLogin(currentUser));
    })
    .catch((error) => {
      console.log("register");
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode, errorMessage);
    });
};

export const logInWithEmailAndPassword = (
  email,
  password,
  dispatch,
  navigate
) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const currentUser = userCredential.user;
      // currentUser.displayName = email;
      dispatch(authLogin(currentUser));
      navigate("/");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode || errorMessage);
    });
};

export const logOut = (dispatch, navigate) => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      dispatch(authLogout());
      navigate("/");
    })
    .catch((error) => {
      // An error happened.
      alert(error);
    });
};
