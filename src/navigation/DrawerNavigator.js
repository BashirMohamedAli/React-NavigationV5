import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";
import { DrawerContent } from "./DrawerContent";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={MainStackNavigator} />
      {/* <Drawer.Screen name="Contact" component={ContactStackNavigator} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
