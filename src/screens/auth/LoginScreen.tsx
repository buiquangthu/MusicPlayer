import React, { useState } from "react"
import { View, Image, StyleSheet, TouchableOpacity, Text, Alert } from "react-native"
import { ContainerComponent, CustomButton, CustomText, CustomTextInput } from "../../components";
import CheckBox from "@react-native-community/checkbox";
import { Lock, Sms } from "iconsax-react-native";
import { appColors } from "../../constants/appColors";
import { Apple, Facebook, Google } from "../../assets/svgs";
import authenticationAPI from "../../apis/authApi";
import { isValidateEmail } from "../../utils/emailValidate";
import { useDispatch } from "react-redux";
import { addAuth } from "../../redux/reducers/authReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";




const LoginScreen = ({ navigation }: any) => {

  const [email, setEmail] = useState("")
  const [passWord, setPassWord] = useState("")
  const [isSelected, setSelection] = useState(true)
  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (!isValidateEmail(email)) {
      Alert.alert("Email không hợp lệ")
    } else {
      try {
        const res = await authenticationAPI.HandleAuthentication('/login', { email, passWord }, 'post')
        dispatch(addAuth(res.data))
        // console.log(isSelected)
        await AsyncStorage.setItem('auth', isSelected ? JSON.stringify(res.data): email )
        // console.log(res);
      } catch (error) {
        console.log(error)
      }
    }

  }

  return (
    <ContainerComponent isImageBackground back>
      <View style={[styles.logo]}>
        <Image source={require("../../assets/images/musium_logo.png")}
          style={{
            height: 215,
            width: 275
          }} />
      </View>
      <View>
        <CustomText text="Login to your account" size={40} styles={{
          fontWeight: "700",
          lineHeight: 80,
          textAlign: "center",

        }} />
      </View>
      <View style={{ padding: 34 }}>
        <CustomTextInput
          value={email}
          hint="Email"
          onChange={val => setEmail(val)}
          affix={<Sms size={22} color={appColors.white} />}
          allowClear
        />

        <CustomTextInput
          value={passWord}
          hint="Password"
          onChange={val => setPassWord(val)}
          affix={<Lock size={22} color={appColors.white} />}
          isPassword
        />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: -25 }}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          tintColors={{ true: appColors.white, false: appColors.white }}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Remember me</Text>
      </View>

      <CustomButton
        text="Login"
        type="primary"
        style={[styles.buttonlogin, { backgroundColor: appColors.turquoise }]}
        textStyle={{ fontWeight: "700", fontSize: 16 }}
        onPress={() => handleLogin()}
      />

      <CustomButton
        text="Forgot the password"
        type="link"
        textStyle={[{ fontWeight: "700", fontSize: 16, fontStyle: "normal", textAlign: "center" }]}
        style={{ marginTop: 23 }}
        onPress={() => navigation.navigate('ForgotPassword')}
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

      <View style={[styles.textSignUp]}>
        <CustomText text="Don't have an account? " size={16} />
        <CustomButton
          type="link"
          text="Sign Up"
          textStyle={[{ fontSize: 16, fontWeight: "700" }]}
          onPress={() => navigation.navigate('SignUpScreen')}
        />
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

export default LoginScreen;
