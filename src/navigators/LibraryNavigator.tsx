import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react"
import { View, Text } from "react-native"
import { LibraryScreen } from "../screens";

const LibraryNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false
    }}
    >
        <Stack.Screen name="Library" component={LibraryScreen} />
    </Stack.Navigator>
  )
};

export default LibraryNavigator;
