import React, { useContext, useState, useEffect } from "react";
import { PieChart } from "react-native-chart-kit";
import { AuthContext } from "../../provider/AuthProvider";
import { View, Linking, Dimensions } from "react-native";
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

  useEffect(() => {
    tasks.forEach((task) => {
      console.log(task);

      if (task.isDone === true) {
        setTasksTrue((current) => current + 1);
      }
      if (task.isDone === false) {
        setTasksFalse((current) => current + 1);
      }
    });
  }, [info]);

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
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "pink",
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
