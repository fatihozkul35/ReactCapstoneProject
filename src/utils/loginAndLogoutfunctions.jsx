import {
  createUserWithEmailAndPassword,
  // GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, provider } from "../auth/firebase";
import { authLogin, authLogout } from "../redux/actions/authActions";
import { toastifyError, toastifySuccess } from "./toastifyFunction";

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
      toastifySuccess("You have successfully logged in...");
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      toastifyError(errorCode || errorMessage || email);
    });
};

export const registerWithEmailPassword = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const currentUser = userCredential.user;
      toastifySuccess("You have successfully registered...");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toastifyError(errorCode || errorMessage);
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
      toastifySuccess("You have successfully logged in...");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toastifyError(errorCode || errorMessage);
    });
};

export const logOut = (dispatch, navigate) => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      dispatch(authLogout());
      navigate("/");
      toastifySuccess("You have successfully logged out...");
    })
    .catch((error) => {
      // An error happened.
      toastifyError(error);
    });
};
