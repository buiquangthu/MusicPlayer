import React, { useState } from "react"
import { View, Text } from "react-native"
import CustomButton from "../../components/CustomButton"
import Icon from "react-native-vector-icons/FontAwesome"
import { CustomTextInput } from "../../components";
import { Use } from "react-native-svg";
import { Lock, Sms } from "iconsax-react-native";
import { appColors } from "../../constants/appColors";


const LoginScreen = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <View style = {{alignContent: "center", flex: 1, justifyContent: "center", padding: 30}}>
      <CustomTextInput
        value={email}
        onChange={val => setEmail(val)}
        allowClear
        hint="Email"
        affix = {<Sms size={22} color= {appColors.white} />}
        />

        <CustomTextInput
        value={password}
        onChange={val => setPassword(val)}
        isPassword
        hint="Password"
        affix = {<Lock size={22} color= {appColors.white} />}
        />
    </View>
  )
};

export default LoginScreen;
