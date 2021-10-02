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
  Modal,
  Alert,
  Pressable,
} from "react-native";
import { ceil } from "react-native-reanimated";

export default function Add_task(props) {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <Pressable
        style={[styles.button, styles.buttonClose]}
        onPress={() => {
          setModalVisible(!modalVisible);
          props.navigation.navigate("Task");
        }}
      >
        <Text style={styles.textStyle}>X</Text>
      </Pressable>
      <View style={styles.container}>
        <View style={styles.container}>
          <View style={styles.titleComponent}>
            <Text style={styles.titleText}>Crear Hábito</Text>
            <TouchableOpacity
              style={styles.buttonCancel}
              onPress={() => {
                setModalVisible(!modalVisible);
                props.navigation.navigate("Task");
              }}
            >
              <Text style={styles.textCancel}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonCreate}
              onPress={() => {
                props.navigation.navigate("Task");
              }}
            >
              <Text style={styles.textCreate}>Crear</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text>Título*</Text>
            <TextInput
              style={styles.titleInput}
              placeholder="Añadir un título"
            ></TextInput>
            <Text>Notas</Text>
            <TextInput
              style={styles.titleInput}
              placeholder="Añadir un título"
            ></TextInput>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  textCancel: {
    color: "white",
  },
  textCreate: {
    color: "#1e90ff",
  },
  buttonCreate: {
    backgroundColor: "#d7ccec",
  },
  titleComponent: {
    width: "100%",
    backgroundColor: "#1e90ff",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "tomato",
  },
  titleText: {
    color: "white",
  },
  container: {
    backgroundColor: "#1e90ff",
    alignItems: "center",
    width: "100%",
    height: "40%",
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
    height: 60,
    backgroundColor: "#1e90ff",
  },
});
