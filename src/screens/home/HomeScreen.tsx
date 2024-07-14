import { Celo, Routing } from "iconsax-react-native";
import React from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import { ContainerComponent, CustomButton, CustomIconButton, CustomText } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, deleteAuth } from "../../redux/reducers/authReducer"



const HomeScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const user = useSelector(authSelector);
  console.log(user);

  return (
    <ContainerComponent isImageBackground isScroll>
      <Image source={require('../../assets/images/blackgradient.png')} style={styles.gradient} />

      <View style={{ position: "absolute", flexDirection: "row", marginTop: 55, paddingHorizontal: 15 }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.user}>
          <Image source={require('../../assets/images/user.png')} style={styles.imageUser} />
        </TouchableOpacity>
        <View style={{ flexDirection: "column" }}>
          <CustomText text="Chào mừng đã trở lại" size={19} styles={{ fontWeight: "700" }} />
          <CustomText text={user.userName} size={16} color="white" styles ={{fontWeight: "700", opacity: 0.58}} />
        </View>
        <View style={{ flexDirection: "row", marginLeft: '15%' }}>
          <CustomIconButton name="equalizer" onPress={() => { }} />
          <CustomIconButton name="notifications" onPress={() => { }} />
          <CustomIconButton name="settings" onPress={() => { }} />
        </View>
      </View>
      <View style = {{marginTop: '-43%',paddingHorizontal: 30, paddingVertical: 10}}>
        <CustomText text="Continue Listening" styles = {[styles.title,]} />

        <View style = {{flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 12}}>
            <TouchableOpacity style = {styles.item}>
              
            </TouchableOpacity>
        </View>
      </View>

    </ContainerComponent>
  )
};

const styles = StyleSheet.create({
  gradient: {
    width: '100%',
    height: 352,
  },
  user: {
    borderRadius: 20,
    overflow: 'hidden',
    marginRight: 17,
  },
  imageUser: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  title:{
    fontSize: 24,
    fontWeight: "700",
    fontStyle: "normal",
  },
  item:{
    flex: 1,
    borderRadius: 10,
    backgroundColor: "rgba(67, 99, 105, 0.20)",
    height:55,
    paddingVertical: 10
  }
})

export default HomeScreen;
