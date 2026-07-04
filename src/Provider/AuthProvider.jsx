import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import axios from "axios";
import app from "../Firebase/Firebase.config";
const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const [loading, setLoading] = useState(true);

  //   User Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        
        // axios
        //   .post("https://blogs-editor-server.vercel.app/jwt", {
        //     email: currentUser?.email,
        //   })
        //   .then((data) => {
        //     localStorage.setItem("access-token", data.data.token);
        //     setLoading(false);
        //   });
      } else {
        // localStorage.removeItem("access-token");
        setLoading(false);
      }
    });
    return () => {
      return unsubscribe;
    };
  }, []);

  // New User
  const RegisterUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // exiting user sing in
  const SingInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // User Logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // User name and photo
const updateUserProfile = (userInfo) => {
  return updateProfile(auth.currentUser, userInfo);
};
  const authValue = {
    RegisterUser,
    user,
    SingInUser,
    logOut,
    updateUserProfile,
    setLoading,
    loading,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;