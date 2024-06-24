import React from "react"
import { View, Text, Image, TouchableOpacity, ImageBackground } from "react-native"
import { StyleSheet } from "react-native";
import Swiper from "react-native-swiper";

const OnboardingScreen = ({navigation}: any) => {
    return (
        <ImageBackground
            source={require('../assets/images/Welcome.png')}
            style={styles.container}
        >
            <Image source={require('../assets/images/2_Ellipse_2.png')} style={[styles.ellipse_2]} />
            <Image source={require('../assets/images/2_Ellipse_3.png')} style={[styles.ellipse_3]} />
            <Image source={require('../assets/images/2_Ellipse_4.png')} style={[styles.ellipse_4]} />
            <Image source={require('../assets/images/img_girl.png')} style={[{ marginTop: '38%', }]} resizeMode="cover" />

            <Swiper style={{}}
                dot={<View style={styles.dot} />}
                activeDot={<View style={styles.activeDot} />}
                loop={false}
                paginationStyle={styles.pagination}
            >
                <View style={styles.content}>
                    <Text style={styles.text}>
                        From the <Text style={styles.highlight}>latest</Text> to the <Text style={styles.highlight}>greatest </Text>
                        hits, play your favorite tracks on <Text style={[styles.highlight, { fontWeight: "bold" }]}>musium</Text> now!
                    </Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.text}>
                        Discover new music every day, from popular artists to hidden gems. Join <Text style={styles.highlight}>musium</Text> now!
                    </Text>
                </View>
            </Swiper>

            <View>
                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>  
            </View>
        </ImageBackground>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    text: {
        color: 'white',
        fontSize: 24,
        textAlign: "center",
        fontWeight: "bold",
        marginHorizontal: 30,
        lineHeight: 30,
        marginTop: -70
    },
    content: {
        position: 'absolute',
        justifyContent: 'center',
        backgroundColor: '#121111',
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginBottom: 120,
    },
    ellipse_2: {
        position: "absolute",
        marginLeft: "6%",
        marginTop: "5%",
        opacity: 0.2
    },
    ellipse_3: {
        position: "absolute",
        marginTop: "60%",
        marginLeft: "71%",
        opacity: 0.2,
    },
    ellipse_4: {
        position: "absolute",
        marginLeft: "69%",
        marginTop: "18%",
        opacity: 0.2,
    },
    highlight: {
        color: '#00eaff'
    },
    dot: {
        backgroundColor: '#DBE7E8',
        width: 50,
        height: 8,
        borderRadius: 4,
        margin: 3,
    },
    activeDot: {
        backgroundColor: '#00eaff',
        width: 50,
        height: 8,
        borderRadius: 4,
        margin: 3
    },
    pagination: {
        bottom: 70,
    },
    button: {
        position: 'absolute',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        backgroundColor: '#06A0B5',
        bottom: 15,
        left: 0,
        right: 0,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
    },

});

export default OnboardingScreen;
