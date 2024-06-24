import React, { ReactNode } from "react"
import {  Text, StyleProp, TouchableOpacity, ViewStyle, TextStyle } from "react-native"
import { globalStyles } from "../styles/globalStyles";
import CustomText from "./CustomText";
import { appColors } from "../constants/appColors";

interface Props {
  icon?: ReactNode;
  text: string;
  type?: "primary" | "text" | "link";
  color?: string;
  textColor?: string;
  onPress?: () => void;
  iconFlex?: "right" | "left";
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const CustomButton = (props: Props) => {
  const { icon, text, type, color, textColor, onPress, iconFlex, textStyle, style } = props;
  return (

    type === "primary" ?
      <TouchableOpacity
        onPress={onPress}
        style={
          [globalStyles.button, {
            backgroundColor: color ?? appColors.background
          }, style]} >
        {icon && icon}
        <CustomText
          text={text}
          color={textColor}
          styles={[textStyle, {marginLeft: icon && iconFlex === "left" ? 20 : 0}]}
          flex={icon && iconFlex === "right" ? 1 : 0}
        />
        {icon && iconFlex === "right" && icon}
      </TouchableOpacity>
      :
      <TouchableOpacity 
          onPress={onPress}
      >
        <Text style={[{ color: type === 'link' ? "#39C0D4" : appColors.background },textStyle]}>{text}</Text>
      </TouchableOpacity>
  )
};

export default CustomButton;
