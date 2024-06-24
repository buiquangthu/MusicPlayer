import React from "react"
import { LoginScreen, SignInScreen, OnboardingScreen, SignUpScreen} from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const AuthNavigator = () => {

    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator
    screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name = "SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} /> 
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      
    </Stack.Navigator>
  )
};

export default AuthNavigator;
