import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { appColors } from "../constants/appColors"

export const globalStyles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '1E1E1E',
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 20,
    minHeight: 59,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: appColors.white
  },
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },

})
