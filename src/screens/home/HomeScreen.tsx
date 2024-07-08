import { Celo } from "iconsax-react-native";
import React from "react"
import { View, Text } from "react-native"
import { CustomButton } from "../../components";
import { useDispatch } from "react-redux";
import {deleteAuth} from "../../redux/reducers/authReducer"

const HomeScreen = () => {

  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <CustomButton text="Logout" type="primary"
        onPress={ () => dispatch(deleteAuth({}))}
      />
    </View>
  )
};

export default HomeScreen;
