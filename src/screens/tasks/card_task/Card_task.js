import React, { useContext, useState, useEffect } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import taskServices from "../../../services/taskServices";
import { DeviceEventEmitter } from "react-native";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  CheckBox,
  Pressable,
  Modal,
  Alert,
} from "react-native";
import { color } from "react-native-reanimated";
import { AuthContext } from "../../../provider/AuthProvider";

const Card_task = ({ navigation, item }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const userInfo = useContext(AuthContext);
  const [info, setInfo] = useState(item);

  useEffect(() => {
    return () => {
      DeviceEventEmitter.removeAllListeners("event.mapMarkerSelected");
    };
  }, []);
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <CheckBox
          tintColors={{ true: "#1e90ff", false: "black" }}
          value={info.isDone}
          onValueChange={() => {
            taskServices.editTask(
              { isDone: !info.isDone },
              userInfo.id,
              info.id
            );
            setInfo({ ...info, isDone: !info.isDone });
          }}
        />
        <Text
          style={[
            info.isDone ? { textDecorationLine: "line-through" } : {},
            styles.itemText,
          ]}
        >
          {info.name}
        </Text>
      </View>
      <View style={styles.itemRight}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Edit_task", { info });
          }}
        >
          <MaterialCommunityIcons
            name="pencil-outline"
            color={"gray"}
            size={25}
          />
        </TouchableOpacity>
        {info.isDone ? (
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <MaterialCommunityIcons
              name="check-outline"
              color={"#0f9d58"}
              size={25}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <MaterialCommunityIcons
              name="delete-outline"
              color={"#d35158"}
              size={25}
            />
          </TouchableOpacity>
        )}
      </View>

      {/* Modal */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={[styles.close]}
            >
              <MaterialCommunityIcons name="close" color={"gray"} size={25} />
            </TouchableOpacity>

            {info.isDone ? (
              <Text style={styles.modalText}>
                Ganarás monedas cuando realices tus tareas! :)
              </Text>
            ) : (
              <Text style={styles.modalText}>
                Recuerda que cuando borres 3 tareas perderás 1 vida
              </Text>
            )}
            {info.isDone ? (
              <Pressable
                style={[styles.button, styles.buttonComplete]}
                onPress={() => {
                  taskServices.deleteTask(userInfo.id, info.id);
                  setModalVisible(!modalVisible);
                  //debo re renderizar acá
                  DeviceEventEmitter.emit("event.testEvent");
                }}
              >
                <Text style={styles.textStyle}>Terminar tarea!</Text>
              </Pressable>
            ) : (
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  taskServices.deleteTask(userInfo.id, info.id);
                  setModalVisible(!modalVisible);
                  //debo re renderizar acá
                  DeviceEventEmitter.emit("event.testEvent");
                }}
              >
                <Text style={styles.textStyle}>Borrar</Text>
              </Pressable>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  close: {
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 7,
    padding: 10,
    elevation: 2,
    width: 100,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#d35158",
  },
  buttonComplete: {
    backgroundColor: "#0f9d58",
    width: 120,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  itemRight: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "20%",
  },
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  itemText: {
    width: "80%",
    fontSize: 18,
  },
});

export default Card_task;
