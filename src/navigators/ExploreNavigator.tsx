import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react"
import { View, Text } from "react-native"
import { ExploreScreen } from "../screens";

const ExploreNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name = 'ExploreNavigator' component={ExploreScreen}/>
    </Stack.Navigator>
  )
};

export default ExploreNavigator;
