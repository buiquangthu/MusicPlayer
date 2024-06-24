import React, { ReactNode } from "react"
import { ImageBackground, SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native"
import { globalStyles } from "../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import { Back } from "../assets/svgs";
import CustomText from "./CustomText";
import { appColors } from "../constants/appColors";


interface Props {
    isImageBackground?: boolean;
    isScroll?: boolean;
    children: ReactNode;
    title?: string;
    back?: boolean;
}

const ContainerComponent = (props: Props) => {

    const { isImageBackground, isScroll, children, title, back } = props;

    const navigation: any = useNavigation();

    const headerComponent = () => {
        return <View style={{ flex: 1 }}>
            {(title || back) && (
                <View
                    style={{
                        paddingHorizontal: 16,
                        paddingVertical: 10,
                        minWidth: 48,
                        minHeight: 48,
                        backgroundColor : appColors.background
                    }}>
                    {back && (
                        <TouchableOpacity onPress={() => navigation.goBack()} style = {{marginRight: 12}}>
                            <Back height={28} width={32}  />
                        </TouchableOpacity>
                    )}
                    {title && (
                        <CustomText text={title} size={16}/>
                    )}
                </View>
            )}

            {returnContainer}
        </View>
    }

    const returnContainer = isScroll ? (

        <ScrollView style={[]}>
            {children}
        </ScrollView>) : (
        <View style={globalStyles.container}>
            {children}
        </View>
    )


    return isImageBackground ? (
        <ImageBackground
            source={require("../assets/images/background.png")}
            style={{ flex: 1 }}
            imageStyle={{ flex: 1 }}
        >
            {headerComponent()}
        </ImageBackground>
    ) : (
        <SafeAreaView>
            <View style={[globalStyles.container]}>
                {headerComponent()}
            </View>
        </SafeAreaView>
    )
};

export default ContainerComponent;