import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  CheckBox
} from "react-native";

const Card_task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <CheckBox
          value={props.isDone}
          onValueChange={() => console.log("Hola")}
        />
        <Text style={styles.itemText}>{props.name}</Text>
      </View>
      <TouchableOpacity>
        <MaterialCommunityIcons name="pencil" color={"gray"} size={25} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
