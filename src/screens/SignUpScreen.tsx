import React, { useEffect, useState } from "react"
import { View, StyleSheet, TouchableOpacity, Text } from "react-native"
import { ContainerComponent, CustomButton, CustomText, CustomTextInput } from "../components";
import { isValidateEmail } from "../utils/emailValidate";
import { Lock, Sms, User } from "iconsax-react-native";
import { appColors } from "../constants/appColors";
import { Apple, Facebook, Google } from "../assets/svgs";
import { LoadingModal } from "../modals";
import authenticationAPI from "../apis/authApi";
import { useDispatch } from "react-redux";

const initValue = {
  userName: '',
  email: '',
  passWord: '',
  comfirmPassWord: '',
}

const SignUpScreen = ({ navigation }: any) => {


  const [values, setValues] = useState(initValue)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMess, setErrorMess] = useState('')



  useEffect(() => {
    if (values.email || values.passWord || values.userName || values.comfirmPassWord) {
      setErrorMess('')
    }
  }, [values.email, values.passWord, values.userName, values.comfirmPassWord])

  const handleChangeValue = (key: string, value: string) => {
    const data: any = { ...values }

    data[`${key}`] = value;

    setValues(data)
  }


  const handleSignUp = async () => {
    setIsLoading(true)
    const { userName, email, passWord, comfirmPassWord } = values


    if (userName && email && passWord && comfirmPassWord && passWord) {

      if (!isValidateEmail(email)) {
        setErrorMess('Email không hợp lệ!!!')
        setIsLoading(false)
        return
      }

      if (passWord.length < 6) {
        setErrorMess('Mật khẩu phải có ít nhất 6 kí tự!!!')
        setIsLoading(false)
        return
      }
      if (passWord !== comfirmPassWord) {
        setErrorMess('Mật khẩu không trùng khớp!!!')
        setIsLoading(false)
        return
      }
      try {
        const res = await authenticationAPI.HandleAuthentication('/verification',
          {
            email: values.email
          }
          , 'post')
        console.log(res)
        navigation.navigate('Verification', {
          code: res.data.code,
          ...values,
        })

        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }

      // try {
      //   const res = await authenticationAPI.HandleAuthentication('/register', {
      //     userName,
      //     email,
      //     passWord
      //   }, 'post')
      //   dispatch(addAuth(res.data))
      //   await AsyncStorage.setItem('auth', JSON.stringify(res.data))
      //   setIsLoading(false)
      // } catch (error) {
      //   console.log(error)
      //   setIsLoading(false)
      // }
    } else {
      setErrorMess('Vui lòng nhập đầy đủ thông tin!!!')
      setIsLoading(false)
    }
  }
  return (
    <>
      <ContainerComponent isImageBackground back>
        <View style={{ marginTop: 60 }}>
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
        {errorMess &&
          (<CustomText text={errorMess} size={15} styles={{ color: appColors.dangerou, textAlign: 'center', marginTop: -20 }} />)}
        <CustomButton
          text="Sign Up"
          type="primary"
          style={[styles.buttonlogin, { backgroundColor: appColors.turquoise }]}
          textStyle={{ fontWeight: "700", fontSize: 16 }}
          onPress={handleSignUp}
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
      </ContainerComponent>
      <LoadingModal visible={isLoading} />
    </>
  );
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
