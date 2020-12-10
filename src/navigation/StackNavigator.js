import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";

import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#EB105B",
  },
  headerTintColor: "#fff",
  headerBackTitle: "Back",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

const MainStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Web Development"
        component={Home}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={30}
              backgroundColor="#EB105B"
              onPress={() => navigation.openDrawer()}
            ></Icon.Button>
          ),
        }}
      />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};

const ContactStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={30}
              backgroundColor="#EB105B"
              onPress={() => navigation.openDrawer()}
            ></Icon.Button>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, ContactStackNavigator };
