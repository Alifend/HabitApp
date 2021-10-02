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

export default function Edit_task(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Tarea:</Text>
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
            props.navigation.navigate("Task");
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
    alignItems: "center"
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    width: '100%',
    height:'10%',
    paddingVertical: 15,
    backgroundColor: "#afeeee"
  },
  taskForm: {
    width: "90%",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#afeeee",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#1e90ff",
    paddingHorizontal: 15,
    marginVertical: 20
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    //backgroundColor: 'tomato'
  },
  textInput: {
    fontSize: 24,
    backgroundColor: "#F8F9F9",
    height: '20%',
    width: '100%',
    borderRadius: 10
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