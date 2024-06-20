import React from "react"
import { View, Text, ImageBackground, Image, ActivityIndicator } from "react-native"
import { StyleSheet } from "react-native";

const LaunchScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground>
                <Image source={require('../assets/image/musium_logo.png')} style={{ justifyContent: "center", marginTop: '40%' }} />
                <Image source={require('../assets/image/Luna.png')} style={{position: "absolute", marginTop: '83%', marginLeft: '15%'}} />
            </ImageBackground>
            <View style = {{height: 20}}/>
            <ActivityIndicator color= '#FFFFFF' size={30}/>

        </View>


    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#121111"
    },
});

export default LaunchScreen;