import { AuthContext } from "../../provider/AuthProvider";
import { StatusBar } from "expo-status-bar";
import React, { useState, useContext, useEffect } from "react";
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

export default function Task({ navigation, tasks }) {
  const data = useContext(AuthContext);
  const [info, loading] = useFetch(API + data.id, "", "GET");
  const [taskFiltered, setTaskFiltered] = useState(tasks);
  const [taskItems, setTaskItems] = useState([]);
  const handelAddTask = () => {
    Keyboard.dismiss();
    // setTaskItems([...taskItems, task]);
    // setTask(null);
  };
  useEffect(() => {});
  const completeTask = (index) => {
    // let itemsCopy = [...taskItems];
    // itemsCopy.splice(index, 1);
    // setTaskItems(itemsCopy);
  };

  const handleSearch = (text) => {
    let temp = [];
    tasks.forEach((element) => {
      if (element.name.includes(text)) {
        temp.push(element);
      }
    });
    setTaskFiltered(temp);
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
        <View style={styles.writeTaskWrapper}>
          <TextInput
            style={styles.input}
            placeholder={"Buscar tareas."}
            onChangeText={(text) => handleSearch(text)}
          ></TextInput>

          <TouchableOpacity>
            <View style={styles.searchIcon}>
              <MaterialCommunityIcons name="magnify" color={"gray"} size={25} />
            </View>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.items}>
          {taskFiltered.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigation.navigate("Edit_task", { item });
                }}
              >
                {!item.isDone && (
                  <Card_task item={item} navigation={navigation} />
                )}
              </TouchableOpacity>
            );
          })}
          {taskFiltered.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigation.navigate("Edit_task", { item });
                }}
              >
                {item.isDone && (
                  <Card_task item={item} navigation={navigation} />
                )}
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
    marginVertical: 5,
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
    bottom: 10,
    right: 20,
    width: 50,
    height: 50,
    backgroundColor: "#1e90ff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
});
