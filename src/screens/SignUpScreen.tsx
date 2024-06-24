import React, { useState } from "react"
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native"
import { ContainerComponent, CustomButton, CustomText, CustomTextInput } from "../components";
import CheckBox from "@react-native-community/checkbox";
import { Lock, Sms, User } from "iconsax-react-native";
import { appColors } from "../constants/appColors";

import { Apple, Facebook, Google, Back } from "../assets/svgs";


const initValue = {
  userName: '',
  email: '',
  passWord: '',
  comfirmPassWord: '',
}

const SignUpScreen = ({ navigation }: any) => {

  const [values, setValues] = useState(initValue)

  const handleChangeValue = (key: string, value: string) => {
    const data: any = { ...values }

    data[`${key}`] = value;

    setValues(data)
  }

  return (
    <ContainerComponent isImageBackground back>
      <View style = {{marginTop: 60}}>
        <CustomText text="Sign Up" size={40} styles={{
          fontWeight: "700",
          lineHeight: 80,
          textAlign: "center",

        }} />
      </View>
      <View style={{ padding: 34 }}>
        <CustomTextInput
          value={values.userName}
          hint="User Name"
          onChange={val => handleChangeValue('userName', val)}
          affix={<User size={22} color={appColors.white} />}
          allowClear
        />
        <CustomTextInput
          value={values.email}
          hint="Email"
          onChange={val => handleChangeValue('email', val)}
          affix={<Sms size={22} color={appColors.white} />}
          allowClear
        />

        <CustomTextInput
          value={values.passWord}
          hint="Password"
          onChange={val => handleChangeValue('passWord', val)}
          affix={<Lock size={22} color={appColors.white} />}
          isPassword
        />
        <CustomTextInput
          value={values.comfirmPassWord}
          hint="Comfirm Password"
          onChange={val => handleChangeValue('comfirmPassWord', val)}
          affix={<Lock size={22} color={appColors.white} />}
          isPassword
        />
      </View>

        <CustomButton
          text="Sign Up"
          type="primary"
          style={[styles.buttonlogin, { backgroundColor: appColors.turquoise }]}
          textStyle={{ fontWeight: "700", fontSize: 16 }}
        />

        <CustomButton
          text="Forgot the password"
          type="link"
          textStyle={[{ fontWeight: "700", fontSize: 16, fontStyle: "normal", textAlign: "center" }]}
          style={{ marginTop: 23 }}
        />

        <CustomText
          text="_________________ or continue with _________________"
          size={15}
          styles={[styles.continueWith]}

        />

        <View style={[styles.loginWith]}>
          <TouchableOpacity style={styles.circleButton}>
            <Google height={40} width={40} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.circleButton}>
            <Facebook height={40} width={40} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.circleButton}>
            <Apple height={40} width={40} />
          </TouchableOpacity>

        </View>
    </ContainerComponent>

  )
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center"
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 0
  },
  label: {
    color: appColors.white,
    marginLeft: 8,
    fontWeight: "700",
    fontSize: 15
  },
  checkbox: {
    marginLeft: "8%"
  },
  buttonlogin: {
    margin: 34,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: appColors.white,
  },
  continueWith: {
    textAlign: "center",
    marginTop: 40,
    fontWeight: "700",
    fontSize: 17,
  },
  loginWith: {
    flexDirection: "row",
    flex: 1,
    marginTop: 35,
    justifyContent: "space-around",
  },
  circleButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: appColors.white,
  },
  textSignUp: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    left: "25%"
  }
})

export default SignUpScreen;
