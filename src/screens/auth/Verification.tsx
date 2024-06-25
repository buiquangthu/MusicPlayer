import React from "react"
import { View, StyleSheet } from "react-native"
import { ContainerComponent, CustomText } from "../../components";

const Verification = () => {
  return (
    <ContainerComponent isImageBackground back>
      <View>
        <CustomText text="Verication" size={30} styles={[styles.title]} />

      </View>
    </ContainerComponent>
  )
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
    lineHeight: 55,
    paddingHorizontal: 16
  }
})

export default Verification;
