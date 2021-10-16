import React, { useContext, useState, useEffect } from "react";
import { PieChart } from "react-native-chart-kit";
import { AuthContext } from "../../provider/AuthProvider";
import { View, Linking, Dimensions, StyleSheet } from "react-native";
import { Avatar, Title, Caption, TouchableRipple } from "react-native-paper";
import * as firebase from "firebase";
import {
  Layout,
  Button,
  Text,
  TopNav,
  Section,
  SectionContent,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import useFetch from "../../hooks/useFetch";
const API = "https://habitapp-backend.herokuapp.com/users/";

const Statistics = ({ tasks }) => {
  const { isDarkmode, setTheme } = useTheme();
  const data = useContext(AuthContext);
  const [info, loading] = useFetch(API + data.id, "", "GET");
  const [tasksTrue, setTasksTrue] = useState(0);
  const [tasksFalse, setTasksFalse] = useState(0);
  let result;

  useEffect(() => {
    tasks.forEach((task) => {
      /*console.log(task);*/

      if (task.isDone === true) {
        setTasksTrue((current) => current + 1);
      }
      if (task.isDone === false) {
        setTasksFalse((current) => current + 1);
      }
    });
  }, [info]);
  result = tasksFalse > tasksTrue;
  if (tasksTrue == tasksFalse) {
    result = 3;
  }
  console.log(result);
  return (
    <Layout>
      <TopNav
        middleContent="Statistics"
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        rightAction={() => {
          if (isDarkmode) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      />
      <View>
        {result ? (
          <View style={styles.info}>
            <Avatar.Image
              source={require("../../../assets/tris.png")}
              size={80}
            />
            <Text style={styles.info}>
              No has realizado la mayoría de tus tareas, esfuerzate más.
            </Text>
          </View>
        ) : (
          <View style={styles.info}>
            <Avatar.Image
              source={require("../../../assets/feliz.png")}
              size={80}
            />
            <Text style={styles.info}>
              Has realizado la mayoría de tus tareas, sigue así.
            </Text>
          </View>
        )}
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          fontSize: 20,
          justifyContent: "center",
          marginTop: 40,
        }}
      >
        <PieChart
          data={[
            {
              name: "Tareas realizadas",
              population: tasksTrue,
              color: "rgba(131, 167, 234, 1)",
              legendFontColor: "#7F7F7F",
              legendFontSize: 10,
            },
            {
              name: "Tareas no realizadas",
              population: tasksFalse,
              color: "#F00",
              legendFontColor: "#7F7F7F",
              legendFontSize: 10,
            },
          ]}
          width={Dimensions.get("window").width}
          height={220}
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
        />
        {/* <Section style={{ marginTop: 10, width: "90%" }}>
          <Text fontWeight="bold" style={{ textAlign: "center" }}>
            {!loading && <Text> {info.username} </Text>}
          </Text>
          <SectionContent>
            {!loading && <Text> {info.contraseña} </Text>}
            <Button
              style={{ marginTop: 10 }}
              text="Rapi UI Documentation"
              status="info"
              onPress={() => Linking.openURL("https://rapi-ui.kikiding.space/")}
            />
          </SectionContent>
        </Section> */}
      </View>
    </Layout>
  );
};

export default Statistics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  info: {
    color: "#777777",
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10,
  },
});
