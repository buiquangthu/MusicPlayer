import React from "react"
import { LoginScreen, SignIn, OnboardingScreen } from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import OnboardingScreen from "../screens/OnboardingScreen";

const AuthNavigator = () => {

    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator
    screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name = "SignIn" component={SignIn} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  )
};

export default AuthNavigator;
