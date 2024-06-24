import React, { ReactNode, useState } from "react"
import { View, TouchableOpacity, TextInput, StyleSheet, StyleProp, TextStyle, KeyboardType } from "react-native"
import { EyeSlash, Eye } from "iconsax-react-native"
import AntDesign from "react-native-vector-icons/AntDesign";
import { appColors } from "../constants/appColors";

interface Props {
  value: string;
  hint?: string;
  affix?: ReactNode;
  suffix?: ReactNode;
  onChange: (val: string) => void;
  isPassword?: boolean;
  allowClear?: boolean;
  key?: KeyboardType;
}

const CustomTextInput = (props: Props) => {
  const { value, hint, affix, suffix, onChange, isPassword, allowClear, key } = props;

  const [showPassword, setShowPassword] = useState(isPassword ?? false);


  return (
    <View style={styles.inputContainer}>
      {affix && affix}
      <TextInput
        value={value}
        placeholder={hint ?? ""}
        onChangeText={val => onChange(val)}
        secureTextEntry={showPassword}
        style={[styles.textInput]}
        placeholderTextColor={appColors.text}
        keyboardType={key ?? "default"}
      />
      {suffix && suffix}
      <TouchableOpacity
        onPress={isPassword ? () => setShowPassword(!showPassword) : () => onChange("")}
      >
        {isPassword ? (
          showPassword ?
            <EyeSlash size={20} color={appColors.white} /> :
            <Eye size={20} color={appColors.white} />
        ) : (
          value.length > 0 && allowClear &&
          <AntDesign name="close" size={22} color={appColors.white} />
        )}
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: appColors.background,
    borderColor: appColors.gray,
    width: "100%",
    minHeight: 59,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  textInput: {
    color: appColors.white,
    fontSize: 16,
    padding: 0,
    margin: 0,
    flex: 1,
    paddingHorizontal: 15
  }
});

export default CustomTextInput;


