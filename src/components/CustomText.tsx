import { StyleProp, Text, TextStyle } from "react-native";

interface Props {
    text: string;
    color?: string;
    size?: number;
    flex?: number;
    styles?: StyleProp<TextStyle>;
}

const CustomText = (props: Props) => {
    const {text, color, size, flex, styles} = props;

    return(
        <Text style ={
            [{
                color: color ?? "#FFFFFF",
                fontSize: size ?? 16,
                flex: flex ?? 0,
            }, styles]
        }>
            {text}
        </Text>
    )
}

export default CustomText;