import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import {
  Layout,
  TopNav,
  Text,
  themeColor,
  useTheme,
} from "react-native-rapi-ui";
import { Avatar, Title, Caption, TouchableRipple } from "react-native-paper";

import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Icon } from "react-native-vector-icons/MaterialCommunityIcons";
import { color } from "react-native-reanimated";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function ({ navigation, user }) {
  const { isDarkmode, setTheme } = useTheme();
  console.log(user);
  let cadena = user.gender;
  let cadena2 = "f";
  let resultado = cadena == cadena2;
  console.log(resultado);

  return (
    <Layout>
      <TopNav
        middleContent="Profile"
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        leftAction={() => navigation.goBack()}
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
      <SafeAreaView style={styles.container}>
        <View style={styles.userInformation}>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            {resultado ? (
              <Avatar.Image
                source={{
                  uri: "https://e7.pngegg.com/pngimages/832/44/png-clipart-advertising-service-blog-internet-avatar-woman-face-black-hair-thumbnail.png",
                }}
                size={80}
              />
            ) : (
              <Avatar.Image
                source={{
                  uri: "https://e7.pngegg.com/pngimages/997/887/png-clipart-avatar-computer-icons-user-profile-internet-avatar-man-face-black-hair-thumbnail.png",
                }}
                size={80}
              />
            )}

            <View style={{ marginLeft: 20 }}>
              <Title
                style={[
                  styles.title,
                  {
                    marginTop: 15,
                    marginBottom: 5,
                  },
                ]}
              >
                {user.username}
              </Title>
              {resultado ? (
                <Caption style={styles.Caption}>Avatar:Femenino</Caption>
              ) : (
                <Caption style={styles.Caption}>Avatar:Masculino</Caption>
              )}
            </View>
          </View>
        </View>
        <View style={styles.userInformation}>
          <View style={styles.row}>
            <Entypo name="email" size={24} color="blue" />
            <Text style={styles.info}>{user.email} </Text>
          </View>
        </View>
        <View style={styles.userInformation}>
          <View style={styles.row}>
            <MaterialCommunityIcons name="map-marker" size={24} color="red" />
            <Text style={styles.info}>Colombia </Text>
          </View>
        </View>
        <View style={styles.infoBoxWrapper}>
          <View style={styles.infoBox}>
            <Title>Recompensas</Title>

            <Caption>
              {" "}
              <MaterialCommunityIcons
                name="currency-usd-circle"
                size={20}
                color="#FFCC00"
              />{" "}
              100
            </Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>Vidas</Title>
            <Caption>
              <AntDesign name="heart" size={17} color="red" /> 3
            </Caption>
          </View>
        </View>
        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItems}>
              <MaterialIcons
                name="drive-file-rename-outline"
                size={24}
                color="black"
              />
              <Text style={styles.menuItemText}>Cambiar nombre de usuario</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItems}>
              <MaterialCommunityIcons
                name="email-sync-outline"
                size={24}
                color="black"
              />
              <Text style={styles.menuItemText}>
                Cambiar correo electrónico
              </Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItems}>
              <MaterialCommunityIcons
                name="key-change"
                size={24}
                color="black"
              />

              <Text style={styles.menuItemText}>Cambiar contraseña</Text>
            </View>
          </TouchableRipple>
        </View>
      </SafeAreaView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInformation: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItems: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },

  info: {
    color: "#777777",
    marginLeft: 20,
  },
  amarillo: {
    color: "#FFCC00",
  },
});
