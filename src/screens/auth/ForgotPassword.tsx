import React, { useState } from "react"
import { View, Text, StyleSheet, Alert } from "react-native"
import { ContainerComponent, CustomButton, CustomText, CustomTextInput } from "../../components";
import { ArrowRight, Sms } from "iconsax-react-native";
import { appColors } from "../../constants/appColors";
import authenticationAPI from "../../apis/authApi";
import { LoadingModal } from "../../modals";

const ForgotPassword = ({navigation}: any) => {

  const [email, setEmail] = React.useState('')
  const [isLoading, setIsLoading] = useState(false)


  const handleForgotPassword = async() =>{
    const api = '/forgotPassword'
    
    setIsLoading(true)
    try {
      const res = await authenticationAPI.HandleAuthentication(api,{email},"post")
      console.log(res)
      Alert.alert("Chúng tôi đã gửi lại mât khẩu cho bạn, vui lòng kiểm tra email của bạn")
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      console.log('Không thể gửi lại mật khẩu')
      setIsLoading(false)
    }
  }

  return (
    <ContainerComponent isImageBackground back>
      <View >
        <CustomText text="Resset Password" size={30} styles={[styles.title]} />
        <CustomText text="Please enter your email address to request a password reset" size={17} styles={[styles.text]} />
      </View>

      <View style={{ paddingHorizontal: 20, marginTop: 26 }}>
        <CustomTextInput
          value={email}
          onChange={val => setEmail(val)}
          hint="abc@gmail.com"
          affix={<Sms size={22} color={appColors.white} />}
          allowClear
        />
      </View>

      <View style = {{paddingHorizontal: 50}}>
        <CustomButton
          disabled={!email}
          text="Gửi lại mật khẩu"
          type="primary"
          style={{ backgroundColor: appColors.turquoise, marginTop: 40 }}
          textStyle={{ fontWeight: "700" }}
          iconFlex="right"
          onPress={handleForgotPassword}
          
        />
      </View>
      <LoadingModal visible ={isLoading}/>
    </ContainerComponent>
  )
};


const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
    lineHeight: 50,
    paddingHorizontal: 16
  },
  text: {
    padding: 20
  }
})
export default ForgotPassword;
