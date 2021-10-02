import React, { useEffect } from "react";
import * as firebase from "firebase";
import { Text } from "react-native";
const Logout = () => {
  useEffect(() => {
    firebase.auth().signOut();
  }, []);
  return <Text> </Text>;
};

export default Logout;
