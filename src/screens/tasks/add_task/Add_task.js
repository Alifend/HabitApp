import { AuthContext } from "../../../provider/AuthProvider";
import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ceil } from "react-native-reanimated";

export default function Add_task(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Tarea:</Text>
      <View style={styles.taskForm}>
        <Text style={styles.label}>Descripción</Text>
        <TextInput style={styles.textInput}> </TextInput>
        <Text style={styles.label}>Descripción</Text>
        <TextInput style={styles.textInput}> </TextInput>
        <Text style={styles.label}>Frecuencia</Text>
        <TextInput style={styles.textInput}> </TextInput>
        <Text style={styles.label}>Cuando</Text>
        <TextInput style={styles.textInput}> </TextInput>
        <Text style={styles.label}>Dificultad</Text>
        <TextInput style={styles.textInput}> </TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5fa8ff",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  title: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 28,
    width: "100%",
    height: "10%",
    paddingVertical: 15,
    //backgroundColor: "#5fa8ff",
    backgroundColor: "pink",
  },
  taskForm: {
    width: "90%",
    height: "50%",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#E8EAED",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#1e90ff",
    paddingHorizontal: 15,
    marginVertical: 20,
  },
  buttonWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "pink",
    justifyContent: "space-between",
    height: "10%",
    width: "90%",
  },

  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
    //backgroundColor: 'tomato'
  },
  textInput: {
    fontSize: 24,
    backgroundColor: "#F8F9F9",
    height: "20%",
    width: "100%",
    borderRadius: 10,
  },
  buttonSubmit: {
    width: 60,
    height: "auto",
    backgroundColor: "green",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  buttonCancel: {
    width: 60,
    height: 60,
    backgroundColor: "red",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
});
