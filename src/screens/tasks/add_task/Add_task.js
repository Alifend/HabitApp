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
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { ceil } from "react-native-reanimated";

export default function Add_task(props) {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.wrapper}>
        <View style={styles.titleContainer}>
          <View style={styles.titleComponent}>
            <Text style={styles.titleText}>Crear Hábito</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <TouchableOpacity
                style={styles.buttonCancel}
                onPress={() => {
                  props.navigation.navigate("Task");
                }}
              >
                <Text style={styles.textCancel}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonCreate}
                onPress={() => {
                  //Send data to backend
                  props.navigation.navigate("Task");
                }}
              >
                <Text style={styles.textCreate}>Crear</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.mainSection}>
            <Text style={styles.mainTextSection}>Título*</Text>
            <TextInput
              style={styles.mainTextTitle}
              placeholder="Añadir un título"
            ></TextInput>
            <Text style={styles.mainTextSection}>Notas</Text>
            <TextInput
              style={styles.titleTextNotas}
              placeholder="Añadir notas"
            ></TextInput>
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttonPlus}
              onPress={() => {
                props.navigation.navigate("Task");
              }}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonMinus}
              onPress={() => {
                props.navigation.navigate("Task");
              }}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.formSubContainer}>
              <Text style={styles.bodyTextSection}>Dificultad</Text>
              <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }
                style={styles.formInput}
              >
                <Picker.Item label="Easy *" value="1" />
                <Picker.Item label="Medium **" value="2" />
                <Picker.Item label="Hard ***" value="3" />
              </Picker>
              {/* <TextInput style={styles.formInput}></TextInput> */}
              <Text style={styles.bodyTextSection}>Etiquetas</Text>
              <TextInput style={styles.formInput}></TextInput>

              <Text style={styles.bodyTextSection}>Reset Counter</Text>
              <TextInput style={styles.formInput}></TextInput>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.secondButtonCreate}
          onPress={() => {
            props.navigation.navigate("Task");
          }}
        >
          <Text style={styles.secondButtonCreateText}>Crear</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    // </Modal>
  );
}

const styles = StyleSheet.create({
  secondButtonCreateText: {
    color: "white",
    fontSize: 18,
  },
  secondButtonCreate: {
    backgroundColor: "#1e90ff",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 8,
  },
  mainTextTitle: {
    height: 40,
    borderRadius: 5,
    padding: 5,
    backgroundColor: "white",
    color: "black",
    width: "100%",
    textAlignVertical: "top",
  },
  buttonText: {
    color: "#1e90ff",
    fontSize: 30,
  },
  modal: {
    height: "100%",
  },
  scrollView: {
    padding: 10,
  },
  formInput: {
    borderRadius: 5,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 3,
    backgroundColor: "white",
    color: "black",
    width: "100%",
    textAlignVertical: "top",
    marginBottom: 10,
  },
  bodyTextSection: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonPlus: {
    borderRadius: 50,
    backgroundColor: "white",
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 40,
    borderColor: "#1e90ff",
    borderWidth: 3,
  },
  buttonMinus: {
    borderRadius: 25,
    backgroundColor: "white",
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#1e90ff",
    borderWidth: 3,
    overflow: "hidden",
  },
  buttonsContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    margin: 20,
  },
  formSubContainer: {
    width: "95%",
  },
  bodyContainer: {
    width: "100%",
  },
  formContainer: {
    width: "100%",
    alignItems: "center",
  },
  titleTextNotas: {
    height: 70,
    borderRadius: 5,
    padding: 5,
    backgroundColor: "white",
    color: "black",
    width: "100%",
    textAlignVertical: "top",
  },
  mainTextSection: {
    marginTop: 10,
    marginBottom: 4,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  titleInput: {
    borderRadius: 5,
    padding: 5,
    backgroundColor: "white",
    color: "black",
    width: "100%",
  },
  mainSection: {
    height: "80%",
    width: "95%",
    alignItems: "flex-start",
  },
  wrapper: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingBottom: 20,
    paddingTop: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  textCancel: {
    color: "white",
    fontSize: 16,
  },
  textCreate: {
    color: "#1e90ff",
    fontSize: 16,
  },
  buttonCreate: {
    backgroundColor: "white",
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 7,
    paddingTop: 7,
    borderRadius: 8,
  },
  titleComponent: {
    width: "95%",
    height: "20%",
    backgroundColor: "#1e90ff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 50,
  },
  titleText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
  titleContainer: {
    backgroundColor: "#1e90ff",
    alignItems: "center",
    width: "100%",
    height: "45%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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
    height: "100%",
    backgroundColor: "#1e90ff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
});
