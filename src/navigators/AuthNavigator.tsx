import React, { useState } from "react"
import { LoginScreen, SignInScreen, OnboardingScreen, SignUpScreen, Verification, ForgotPassword} from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";


const AuthNavigator = () => {

    const [isExistingUer, setIsExistingUser] = useState(false)

    const checkExistingUser = () => {
      const res = AsyncStorage.getItem('auth')
    }
    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator
    screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name = "SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} /> 
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

      
    </Stack.Navigator>
  )
};

export default AuthNavigator;
