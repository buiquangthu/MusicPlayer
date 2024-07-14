import React from "react"
import { View, TouchableOpacity, StyleProp, ViewStyle, StyleSheet } from "react-native"
import  Icon  from "react-native-vector-icons/MaterialIcons";
import { appColors } from "../constants/appColors";

interface Props {
    name: string;
    onPress?: () => void;
    badge?: boolean;
    style?: StyleProp<ViewStyle>;
    size?: number;
}

const CustomIconButton = (props: Props) => {
    const { name, onPress, badge, style, size} = props;
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.iconButton, style]}
        >
            <Icon name= {name} size={size ?? 30} color={appColors.white}/>
            {badge && <View style ={styles.badge}/>}

        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    iconButton: {
        position: "relative",
        padding: 10,
    },
    badge: {
        position: 'absolute',
        top: 5,
        right: 5,
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#00cfd7',
    }
})

export default CustomIconButton;
