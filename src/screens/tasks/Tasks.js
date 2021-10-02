import { AuthContext } from "../../provider/AuthProvider";
import { StatusBar } from "expo-status-bar";
import React, { useState, useContext, useEffect } from "react";
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
import { Button } from "react-native-rapi-ui";
import useFetch from "../../hooks/useFetch";
const API = "https://habitapp-backend.herokuapp.com/users/";
import Card_task from "./card_task/Card_task";
import * as firebase from "firebase";

export default function Task({ navigation }) {
  const data = useContext(AuthContext);
  const [info, loading] = useFetch(API + data.id + "/tasks/", "", "GET");
  const [userinfo, loading_info] = useFetch(API + data.id, "", "GET");
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  useEffect(() => {
    if (!loading) {
      info.forEach((element) => {
        setTaskItems((current) => [...current, element.titulo]);
      });
    }
    return () => {};
  }, [info]);

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
      <Button
        status="danger"
        text="Logout"
        onPress={() => {
          firebase.auth().signOut();
        }}
        style={{
          marginTop: 10,
        }}
      />
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}> Today's tasks {data.id}</Text>
        {!loading_info && (
          <Text style={styles.sectionTitle}>
            {" "}
            {userinfo.username}
            {" funcionó?????"}
          </Text>
        )}
        <View style={styles.items}>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Card_task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

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

        <TouchableOpacity onPress={() => {
                navigation.navigate("Add_task");
              }}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
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
