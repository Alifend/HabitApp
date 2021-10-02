import React, { useContext } from "react";
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
import SecondScreen from "../screens/tasks/SecondScreen";
import Statistics from "../screens/statistics/Statistics";
import Logout from "../screens/auth/Logout";
// Auth screens
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import ForgetPassword from "../screens/auth/ForgetPassword";

import Loading from "../screens/utils/Loading";
import useFetch from "../hooks/useFetch";
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

const TastNavigation = () => {
  return (
    <TaskStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <TaskStack.Screen name="Task" component={Task}/>
      <TaskStack.Screen name="Add_task" component={Add_task}/>
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

  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        name="Task"
        component={TastNavigation}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        name="Profile"
        component={SecondScreen}
      />
      {!loading && (
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
          {() => <Statistics tasks={info} />}
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
