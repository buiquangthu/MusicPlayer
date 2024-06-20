import React from "react"
import { View, Text } from "react-native"
import CustomButton from "../../components/CustomButton"
import Icon from "react-native-vector-icons/FontAwesome"


const LoginScreen = () => {
  return (
    <View>
      <CustomButton
        text="Login"
        type="primary"
        onPress={() => console.log("Login")}
        icon={
          <View>
            <Text > <Icon name="home" color={"#ffffff"} size={22}/></Text>
          </View>

        }
        iconFlex="left"
      />
    </View>
  )
};

export default LoginScreen;
