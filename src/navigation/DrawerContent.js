import React from "react";
import { View, StyleSheet, Image } from "react-native";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Ionicons } from "@expo/vector-icons";

export function DrawerContent(props) {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View>
          <View>
            <View style={styles.box2}>
              <Avatar.Image
                source={require("./img/Drawer.jpeg")}
                style={styles.imageDrawer}
              />
              <Text style={styles.textheader}>Isbar Web Development</Text>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="lock-outline" color={color} size={size} />
              )}
              label="Privacy"
              onPress={() => {}}
            />
          </Drawer.Section>
          <Drawer.Section>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="star-outline" color={color} size={size} />
              )}
              label="Rate App"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="search-outline" color={color} size={size} />
              )}
              label="More Apps"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="email-outline" color={color} size={size} />
              )}
              label="Feedback"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="facebook" color={color} size={size} />
              )}
              label="Like Us"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="share-outline" color={color} size={size} />
              )}
              label="Share App"
              onPress={() => {}}
            />
          </Drawer.Section>
          <TouchableRipple
            onPress={() => {
              toggleTheme();
            }}
          >
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch value={isDarkTheme} />
              </View>
            </View>
          </TouchableRipple>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  box2: {
    width: 280,
    height: 150,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  textheader: {
    fontSize: 16,
    color: "white",
    marginTop: 5,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
