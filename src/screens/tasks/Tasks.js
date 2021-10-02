import { AuthContext } from "../../provider/AuthProvider";
import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { Button } from "react-native-rapi-ui";
import useFetch from "../../hooks/useFetch";
const API = "https://habitapp-backend.herokuapp.com/users/";
import Card_task from "./card_task/Card_task";
import * as firebase from "firebase";

const data_mock = [
  {
    isDone: true,
    description: "asdsad",
    name: "algo",
  },
  {
    isDone: false,
    description: "asddddd",
    name: "asdfkljasdklasjdklasjd",
  },
  {
    isDone: true,
    description: "a,lsjdaklsjdsakljdkaslj",
    name: "klasjdklasdjsklasjdklasjdklasjdlkasdjalksdjaskldj",
  },
  {
    isDone: true,
    description: "asdsad",
    name: "algo",
  },
  {
    isDone: false,
    description: "asddddd",
    name: "asdfkljasdklasjdklasjd",
  },
  {
    isDone: true,
    description: "a,lsjdaklsjdsakljdkaslj",
    name: "klasjdklasdjsklasjdklasjdklasjdlkasdjalksdjaskldj",
  },
  {
    isDone: true,
    description: "asdsad",
    name: "algo",
  },
  {
    isDone: false,
    description: "asddddd",
    name: "asdfkljasdklasjdklasjd",
  },
  {
    isDone: true,
    description: "a,lsjdaklsjdsakljdkaslj",
    name: "klasjdklasdjsklasjdklasjdklasjdlkasdjalksdjaskldj",
  },
];
export default function Task({ navigation }) {
  const data = useContext(AuthContext);
  const [info, loading] = useFetch(API + data.id, "", "GET");
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handelAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <View style={styles.titleContainer}>
          <Text style={styles.sectionTitle}>
            Bienvenido{" "}
            {!loading && (
              <Text style={styles.sectionTitleName}>{info.username}</Text>
            )}
          </Text>
          <Text style={styles.sectionTitle}>{"Estas son tus tareas:"}</Text>
        </View>

        <Text style={styles.label}>Buscar tareas:</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput
            style={styles.input}
            placeholder={"Buscar tareas."}
            value={task}
            onChangeText={(text) => setTask(text)}
          ></TextInput>

          <TouchableOpacity>
            <View style={styles.searchIcon}>
              <MaterialCommunityIcons name="magnify" color={"gray"} size={25} />
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>

        <ScrollView style={styles.items}>
          {data_mock.map((item, index) => {
            return (
              // <Text> {item.name}</Text>
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Card_task {...item, navigation } />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      <TouchableOpacity
        style={styles.addTask}
        onPress={() => {
          navigation.navigate("Add_task");
        }}
      >
        <View>
          <Text>
            <MaterialCommunityIcons name="plus" color={"white"} size={25} />
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingHorizontal: 20,
    height: "100%",
  },
  titleContainer: {
    paddingVertical: 15,
    //backgroundColor: 'pink'
  },
  sectionTitle: {
    fontSize: 28,
    textAlign: "center",
  },
  sectionTitleName: {
    fontWeight: "bold",
  },
  items: {
    marginTop: 10,
  },
  writeTaskWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    backgroundColor: "#FFF",
    borderRadius: 10,
  },
  label: {
    fontSize: 18,
    marginLeft: 12,
    marginVertical: 5
  },
  input: {
    paddingVertical: 15,
    width: "85%",
    fontSize: 18,
    marginLeft: 8,
  },
  searchIcon: {
    paddingVertical: 15,
    width: "auto",
    marginRight: 8,
  },
  addTask: {
    position: "absolute",
    bottom: 15,
    right: 20,
    width: 50,
    height: 50,
    backgroundColor: "#5DADE2",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
});
