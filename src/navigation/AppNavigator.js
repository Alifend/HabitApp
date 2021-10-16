import React, { useContext, useEffect, useState } from "react";
//import * as firebase from "firebase";
import firebase from "firebase/app";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthContext } from "../provider/AuthProvider";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// Main
import Home from "../screens/tasks/Home";
import Task from "../screens/tasks/Tasks";
import Add_task from "../screens/tasks/add_task/Add_task";
import Edit_task from "../screens/tasks/edit_task/Edit_task";
import SecondScreen from "../screens/tasks/SecondScreen";
import Statistics from "../screens/statistics/Statistics";
import Logout from "../screens/auth/Logout";
// Auth screens
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import ForgetPassword from "../screens/auth/ForgetPassword";
import Bienvenida from "../screens/auth/Bienvenida";

import Loading from "../screens/utils/Loading";
import useFetch from "../hooks/useFetch";
import taskServices from "../services/taskServices";
// Better put your these secret keys in .env file
const API = "https://habitapp-backend.herokuapp.com/users/";

const firebaseConfig = {
  apiKey: "AIzaSyByZiObxT3jhwOpJVpyJr-PX453jq-Nbbg",
  authDomain: "habitapp-4056f.firebaseapp.com",
  databaseURL: "https://habitapp-4056f-default-rtdb.firebaseio.com",
  projectId: "habitapp-4056f",
  storageBucket: "habitapp-4056f.appspot.com",
  messagingSenderId: "554460473425",
  appId: "1:554460473425:web:6e5484186bed8a5d203070",
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TaskStack = createStackNavigator();

const TastNavigation = ({ tasks, fetchTasks }) => {
  return (
    <TaskStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <TaskStack.Screen name="Task">
        {(props) => <Task {...props} fetchTasks={fetchTasks} />}
      </TaskStack.Screen>
      <TaskStack.Screen name="Add_task" component={Add_task} />
      <TaskStack.Screen name="Edit_task" component={Edit_task} />
    </TaskStack.Navigator>
  );
};
const Auth = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Bienvenida" component={Bienvenida} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
    </AuthStack.Navigator>
  );
};

const MainStack = createStackNavigator();

const Main = () => {
  const data = useContext(AuthContext);
  const [info, loading] = useFetch(API + data.id + "/tasks/", "", "GET");
  const [user, loading2] = useFetch(API + data.id, "", "GET");
  const [taskList, setTaskList] = useState();
  useEffect(() => {
    fetchTasks();
  }, []);
  const fetchTasks = async () => {
    const taskData = await taskServices.getTasks(data.id);
    setTaskList(taskData.data);
  };

  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        name="Task"
      >
        {taskList
          ? () => <TastNavigation tasks={taskList} fetchTasks={fetchTasks} />
          : () => null}
      </Tab.Screen>
      <Tab.Screen
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        name="Profile"
      >
        {!loading2
          ? (props) => <SecondScreen user={user} {...props} />
          : () => null}
      </Tab.Screen>
      {taskList && (
        <Tab.Screen
          options={{
            tabBarLabel: "Statistics",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="google-analytics"
                color={color}
                size={size}
              />
            ),
          }}
          name="Statistics"
        >
          {(props) => <Statistics tasks={taskList} {...props} />}
        </Tab.Screen>
      )}
      <Tab.Screen
        options={{
          tabBarLabel: "Logout",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="logout" color={color} size={size} />
          ),
        }}
        name="Logout"
        component={Logout}
      />
    </Tab.Navigator>
  );
};

export default () => {
  const auth = useContext(AuthContext);
  const user = auth.user;
  return (
    <NavigationContainer>
      {user == null && <Loading />}
      {user == false && <Auth />}
      {user == true && <Main />}
      {/*user == true && <TaskStack />*/}
    </NavigationContainer>
  );
};
