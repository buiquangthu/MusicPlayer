import React, { ReactNode } from "react"
import { ImageBackground, SafeAreaView, ScrollView, View } from "react-native"
import { globalStyles } from "../styles/globalStyles";


interface Props {
    isImageBackground?: boolean;
    isScroll?: boolean;
    children: ReactNode;
    tile?: string;
}

const ContainerComponent = (props: Props) => {

    const { isImageBackground, isScroll, children, tile } = props;

    const returnContainer = isScroll ? (
        <ScrollView style = {[]}>
            {children}
        </ScrollView>) : (
        <View style = {globalStyles.container}>
            {children}
        </View>
    )
    

return isImageBackground ? (
    <ImageBackground
        source={require("../assets/images/background.png")}
        style={{ flex: 1 }}
        imageStyle={{ flex: 1 }}
    >
        {returnContainer}
    </ImageBackground>
) : (
    <SafeAreaView>
        <View style = {[globalStyles.container]}>
            {returnContainer}
        </View>
    </SafeAreaView>
)
};

export default ContainerComponent;