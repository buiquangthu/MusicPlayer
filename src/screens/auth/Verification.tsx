import React, { useEffect, useRef, useState } from "react"
import { View, StyleSheet, TextInput, Alert } from "react-native"
import { ContainerComponent, CustomButton, CustomText } from "../../components";
import { appColors } from "../../constants/appColors";
import { useDispatch } from "react-redux";
import { addAuth } from "../../redux/reducers/authReducer";
import authenticationAPI from "../../apis/authApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoadingModal } from "../../modals";

const Verification = ({ navigation, route }: any) => {

  const { code, email, passWord, userName } = route.params
  const [valueCode, setValueCode] = useState<string[]>([]);
  const [newcode, setNewCode] = useState('');
  const [timeLimit, setTimeLimit] = useState(59)
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [currentCode, setCurrentCode] = useState<string>(code)

  const ref1 = useRef<any>()
  const ref2 = useRef<any>()
  const ref3 = useRef<any>()
  const ref4 = useRef<any>()

  useEffect(() => {
    let item = ``
    valueCode.forEach((val) => {
      item += val
    })
    setNewCode(item)
  }, [valueCode])
  // console.log(newcode)


  useEffect(() => {
    ref1.current.focus()
  }, [])

  const handleChangeCode = (val: string, index: number) => {
    const data = [...valueCode]
    data[index] = val

    setValueCode(data)
  }

  useEffect(() => {
    if (timeLimit > 0) {
      const interval = setInterval(() => {
        setTimeLimit(timeLimit => timeLimit - 1);
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [timeLimit])

  // console.log(valueCode)

  const handleResendCode = async () => {
    setValueCode(['', '', '', ''])
    setNewCode('')
    ref1.current.focus()
    const api = '/verification'
    setIsLoading(true)
    try {
      const res = await authenticationAPI.HandleAuthentication(api, {
        userName,
        email,
        passWord,
      }, "post")
      setTimeLimit(59)
      setCurrentCode(res.data.code)
      // console.log(currentCode)
      setIsLoading(false)
    } catch (error) {
      console.log(`Không thể gửi mã xác minh ${error}`)
      setIsLoading(false)
    }
  }

  const handleVerifyCode = async () => {
    console.log(newcode, currentCode)
    if (timeLimit > 0) {
      if (parseInt(newcode) === parseInt(currentCode)) {
        // console.log("Mã xác minh chính xác")
        const api = '/register'
        setIsLoading(true)
        try {
          const res = await authenticationAPI.HandleAuthentication(api,{
            userName,
            email,
            passWord,
          }, "post")
          dispatch(addAuth(res.data))
          await AsyncStorage.setItem('auth', JSON.stringify(res.data))
          setIsLoading(false)
        } catch (error) {
          console.log(`Không tạo tài khoản ${error}`)
        }
      } else {
        console.log("Mã xác minh không chính xác")
      }
    } else {
      Alert.alert("Mã xác minh đã hết hạn, vui lòng gửi lại mã xác minh")
    }
  }


  return (
    <ContainerComponent isImageBackground back>
      <View>
        <CustomText text="Verication" size={30} styles={[styles.title]} />
        <CustomText text={`Chúng tôi đã gửi cho bạn mã xác minh qua email ${email.replace(
          /.{1,6}/,
          (m: any) => '*'.repeat(m.length))}`
        }
          styles={styles.text} />

        <View style={{ flexDirection: "row", marginTop: 50, paddingHorizontal: 25, justifyContent: "space-around" }}>
          <TextInput
            keyboardType="number-pad"
            value={valueCode[0]}
            ref={ref1}
            maxLength={1}
            style={styles.codeVerification}
            placeholder="-"
            placeholderTextColor={appColors.white}
            onChangeText={val => {
              handleChangeCode(val, 0)
              val.length > 0 && ref2.current.focus()
            }}
          />

          <TextInput
            keyboardType="number-pad"
            value={valueCode[1]}
            ref={ref2}
            maxLength={1}
            style={styles.codeVerification}
            placeholder="-"
            placeholderTextColor={appColors.white}
            onChangeText={val => {
              handleChangeCode(val, 1)
              val.length > 0 && ref3.current.focus()
            }}
          />

          <TextInput
            keyboardType="number-pad"
            value={valueCode[2]}
            ref={ref3}
            maxLength={1}
            style={styles.codeVerification}
            placeholder="-"
            placeholderTextColor={appColors.white}
            onChangeText={val => {
              handleChangeCode(val, 2)
              val.length > 0 && ref4.current.focus()
            }}
          />

          <TextInput
            keyboardType="number-pad"
            value={valueCode[3]}
            ref={ref4}
            maxLength={1}
            style={styles.codeVerification}
            placeholder="-"
            placeholderTextColor={appColors.white}
            onChangeText={val => {
              handleChangeCode(val, 3)
              val && ref4.current.focus()
            }}
          />


        </View>

        <View style={{ marginTop: 80, paddingHorizontal: 60 }}>
          <CustomButton
            type="primary"
            text="Tiếp Tục"
            disabled={newcode.length !== 4}
            onPress={handleVerifyCode}
            style={{ backgroundColor: newcode.length === 4 ? appColors.turquoise : appColors.background }}
          />
        </View>
        <View>
          {timeLimit > 0 ? (
            <View style={{ marginTop: 30, justifyContent: "center", flexDirection: "row" }}>
              <CustomText text="Mã xác minh hết hạn sau " size={18} />
              <CustomText text={`00:${timeLimit}`} color={appColors.turquoise} size={18} />
            </View>
          ) : (
            <View style={{ marginTop: 30, justifyContent: "center", flexDirection: "row" }}>
              <CustomButton
                type="link"
                text="Gửi lại mã xác minh"
                onPress={handleResendCode}
                textStyle={{ fontSize: 18 }}
              />
            </View>
          )}
        </View>
      </View>
      <LoadingModal visible={isLoading} />
    </ContainerComponent>
  )
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
    lineHeight: 55,
    paddingHorizontal: 16
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginTop: 20,
    paddingHorizontal: 16
  },
  codeVerification: {
    height: 65,
    width: 65,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: appColors.white,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
    textAlign: "center",
    color: appColors.white,
    fontWeight: "bold",
  },

})

export default Verification;
