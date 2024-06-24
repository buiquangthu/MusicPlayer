import React from "react"
import { View, Text, Image, StyleSheet } from "react-native"
import { ContainerComponent, CustomButton, CustomText } from "../../components";
import { Apple, Facebook, Google } from "../../assets/svgs";
import { appColors } from "../../constants/appColors";

const SignIn = ({navigation}: any) => {
    return (
        <ContainerComponent isImageBackground >
            <View style={[styles.logo]}>
                <Image source={require("../../assets/images/musium_logo.png")}
                    style={{
                        height: 254,
                        width: 325
                    }} />
            </View>
            <CustomText
                text="Let's get you in"
                size={44}
                styles={[{ fontWeight: "700", textAlign: "center", letterSpacing: 1.5 }]}
            />

            <View style={[{ marginTop: 47, padding: 20 }]}>
                <CustomButton
                    type="primary"
                    text="Continue with Google"
                    iconFlex="left"
                    textStyle={[styles.textStyle]}
                    icon={<Google height={35} width={35} />}
                    style={styles.buttonStyle}
                />
                <CustomButton
                    type="primary"
                    text="Continue with Google"
                    iconFlex="left"
                    textStyle={[styles.textStyle]}
                    icon={<Facebook height={33} width={33} />}
                    style={styles.buttonStyle}
                />
                <CustomButton
                    type="primary"
                    text="Continue with Google"
                    iconFlex="left"
                    textStyle={[styles.textStyle]}
                    icon={<Apple height={33} width={33} />}
                    style={styles.buttonStyle}
                />

                <CustomText
                    text="_______________________   or   _______________________"
                    styles={[{ marginTop: 38, textAlign: "center", fontWeight: "700" }]}
                />

                <CustomButton
                    type="primary"
                    text="Log in with a password"
                    style={[styles.buttonStyle, { backgroundColor: appColors.turquoise, borderRadius: 50, marginTop: 47 }]}
                    textStyle={[styles.textStyle]}
                    onPress={() => navigation.navigate("LoginScreen")}
                />

            </View>
            <View style = {styles.textSignUp}>
                <CustomText text="Don't have an account? " size={16} />
                <CustomButton type="link" text="Sign Up" textStyle={[{ fontSize: 16, fontWeight: "700" }]} />
            </View>




        </ContainerComponent>
    )
};

const styles = StyleSheet.create({
    container: {

    },
    logo: {
        alignItems: "center",
        marginTop: 43
    },
    textStyle: {
        fontWeight: "700",
        fontSize: 18
    },
    buttonStyle: {
        borderRadius: 10,
        borderColor: appColors.white,
        borderWidth: 1,
        marginTop: 20
    },
    textSignUp: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20
    }
})
export default SignIn;
