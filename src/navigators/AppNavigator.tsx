import React, { useEffect } from "react"
import { useState } from "react";
import MainNavigator from "./MainNavigator";
import AuthNavigator from "./AuthNavigator";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { addAuth, authSelector } from "../redux/reducers/authReducer";
import { LaunchScreen } from "../screens";

const AppRouters = () => {
    const [isShowLaunchScreen, setIsShowLaunchScreen] = useState(true)
    const auth = useSelector(authSelector)
    const dispatch = useDispatch();
    const { getItem } = useAsyncStorage("auth");
    
    useEffect(() => {
        checkLogin();
        const timeOut = setTimeout(() => {
            setIsShowLaunchScreen(false)
        }, 1500)
        return () => clearTimeout(timeOut)
    },[]);

 

    const checkLogin = async () => {

        const res = await getItem();

        console.log(res);
        res && dispatch(addAuth(JSON.parse(res)));
    }



    return <>
        {isShowLaunchScreen ? <LaunchScreen/> :  auth.accessToken ? <MainNavigator /> : <AuthNavigator />}
    </>




};

export default AppRouters;
