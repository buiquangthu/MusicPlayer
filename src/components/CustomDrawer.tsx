import React from "react"
import { View, StyleSheet, Image, FlatList, Touchable, TouchableOpacity } from "react-native"
import CustomText from "./CustomText";
import { appColors } from "../constants/appColors";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../redux/reducers/authReducer";
import { User, Sms, Setting2, Logout, Scroll } from "iconsax-react-native";
import { deleteAuth } from "../redux/reducers/authReducer";




const CustomDrawer = ({ navigation }: any) => {

    const user = useSelector(authSelector);
    const size = 22
    const coler = appColors.gray1
    const dispatch = useDispatch();

    const menuProfile = [
        { key: 'MyProfile', title: 'My Profile', icon: <User size={size} color={coler} /> },
        { key: 'ContactUs', title: 'Contact Us', icon: <Sms size={size} color={coler} /> },
        { key: 'Settings', title: 'Settings', icon: <Setting2 size={size} color={coler} /> },
        { key: 'LogOut', title: 'Log Out', icon: <Logout size={size} color={coler} /> },
    ]
    // console.log(user);
    const handleLogOut = () => {
        dispatch(deleteAuth({}));
    }

    return (
        <View style={styles.container}>
            {user.avatar ?
                <Image source={{ uri: user.avatar }} /> :
                <Image source={require('../assets/images/user.png')} style={styles.imageUser} />
            }
            <View>
                <CustomText text={user.userName} size={25} styles={{ fontWeight: "700", paddingVertical: 10 }} />
            </View>

            <FlatList
                data={menuProfile}
                style={{ flex: 1, paddingVertical: 24 }}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={{ flexDirection: "row", alignItems: "center", paddingVertical: 15 }}
                        onPress={item.key === 'LogOut' ? () => handleLogOut() :
                            // () => navigation.navigate(item.key)
                            () => {
                                console.log(item.key);
                                navigation.closeDrawer();
                            }
                        }
                    >
                        {item.icon}
                        <CustomText text={item.title} size={18} styles={{ marginLeft: 10 }} />
                    </TouchableOpacity>
                )}
            />


        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(14,14,14,0.9)',
        flex: 1,
        padding: 16,
    },
    user: {
        borderRadius: 20,
        overflow: 'hidden',
        marginRight: 17,
    },
    imageUser: {
        height: 40,
        width: 40,
        borderRadius: 20,
    }
})

export default CustomDrawer;
