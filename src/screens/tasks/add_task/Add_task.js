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

export default function Add_task({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Tarea</Text>
      <View style={styles.taskForm}>
        <Text style={styles.label}>Descripción</Text>
        <TextInput style={styles.textInput}> </TextInput>
        <Text style={styles.label}>Frecuencia</Text>
        <TextInput style={styles.textInput}> </TextInput>
        <Text style={styles.label}>Cuando</Text>
        <TextInput style={styles.textInput}> </TextInput>
        <Text style={styles.label}>Dificultad</Text>
        <TextInput style={styles.textInput}> </TextInput>
      </View>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Task");
          }}
        >
          <View style={styles.buttonCancel}>
            <Text style={styles.textButton}>+</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Task");
          }}
        >
          <View style={styles.buttonSubmit}>
            <Text style={styles.textButton}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 60,
  },
  taskForm: {
    width: "90%",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  label: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  textInput: {
    fontSize: 24,
    backgroundColor: "#fff",
    width: "100%",
  },
  buttonWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonSubmit: {
    width: 60,
    height: 60,
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
  textButton: {},
});
