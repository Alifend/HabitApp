import React, { createContext, useState, useEffect } from "react";
import * as firebase from "firebase";
const AuthContext = createContext();

const AuthProvider = (props) => {
  // user null = loading
  const [user, setUser] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    checkLogin();
  }, []);

  function checkLogin() {
    firebase.auth().onAuthStateChanged(function (u) {
      if (u) {
        setId(u.uid);
        setUser(true);
        //getUserData();
      } else {
        setUser(false);
        //setUserData(null);
      }
    });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        id,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
