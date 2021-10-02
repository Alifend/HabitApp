import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  CheckBox,
} from "react-native";
import { color } from "react-native-reanimated";

const Card_task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <CheckBox
          tintColors={{ true: "#1e90ff", false: "black" }}
          value={props.isDone}
          onValueChange={() => console.log("Hola")}
        />
        <Text
          style={[
            props.isDone ? { textDecorationLine: "line-through" } : {},
            styles.itemText,
          ]}
        >
          {props.name}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Edit_task");
          console.log(props);
        }}
      >
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
