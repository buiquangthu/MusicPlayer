import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { ContainerComponent, CustomButton, CustomText, CustomTextInput } from "../../components";
import { ArrowRight, Sms } from "iconsax-react-native";
import { appColors } from "../../constants/appColors";

const ForgotPassword = ({navigation}: any) => {

  const [email, setEmail] = React.useState('')

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
          text="Send"
          type="primary"
          style={{ backgroundColor: appColors.turquoise, marginTop: 40 }}
          textStyle={{ fontWeight: "700" }}
          iconFlex="right"
          onPress={()=> navigation.navigate('Verification') }
        />
      </View>
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
