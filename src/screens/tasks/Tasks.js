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
        <Text style={styles.sectionTitle}>Today's tasks </Text>
        {!loading && (
          <Text style={{ fontSize: 25, marginBottom: 10 }}>
            {" "}
            {info.username}{" "}
          </Text>
        )}
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput
            style={styles.input}
            placeholder={"Write a task"}
            value={task}
            onChangeText={(text) => setTask(text)}
          ></TextInput>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Add_task");
            }}
          >
            <View style={styles.addWrapper}>
              <MaterialCommunityIcons name="magnify" color={"gray"} size={25} />
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>

        <ScrollView style={styles.items}>
          {data_mock.map((item, index) => {
            return (
              // <Text> {item.name}</Text>
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Card_task {...item} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 30,
    paddingHorizontal: 20,
    height: "100%",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    // marginTop: 30,
    // backgroundColor: "tomato",
    // flex: 1,
    // justifyContent: "space-around",
    // height: "50%",
    // marginBottom: 60,
    marginTop: 10,
  },
  writeTaskWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 25,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 280,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
});
