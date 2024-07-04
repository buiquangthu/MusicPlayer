import React from "react"
import { View, Text, Modal, ActivityIndicator } from "react-native"
import { globalStyles } from "../styles/globalStyles";
import { CustomText } from "../components";

interface Prop {
    visible: boolean
    mess?: string
}

const LoadingModal = (prop: Prop) => {

    const { visible, mess } = prop
    return (
        <Modal
            visible={visible}
            style={globalStyles.container}
            transparent
            statusBarTranslucent
        >
            <View style={{
                backgroundColor: 'rgba(0,0,0,0.5)',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ActivityIndicator size={33}/>
                <CustomText text="Loading" flex={0} />
            </View>
        </Modal>
    )
};

export default LoadingModal;
