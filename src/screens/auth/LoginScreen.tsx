import React from "react"
import { View, Text } from "react-native"
import CustomButton from "../../components/CustomButton"

const LoginScreen = () => {
  return (
    <View>
      <CustomButton
        text="Login"
        type="primary"
        onPress={() => console.log("Login")}
        icon={
          <View>
            <Text style={[{ color: "#FFFFFF" }]}>N</Text>
          </View>

        }
        iconFlex="left"
      />
    </View>
  )
};

export default LoginScreen;
