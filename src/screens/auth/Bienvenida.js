import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const Bienvenida = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.navigate("Login")}
      pages={[
        {
          backgroundColor: "#a6e4d0",
          image: <Image source={require("../../../assets/3.png")} />,
          title: "HabitApp",
          subtitle: "Organiza tus habitos de una manera divertida",
        },
        {
          backgroundColor: "#fdeb93",
          image: <Image source={require("../../../assets/4.png")} />,
          title: "Vidas y recompensas",
          subtitle: "No dejes acabar tus vidas y gana recompensas",
        },
      ]}
    />
  );
};

export default Bienvenida;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
