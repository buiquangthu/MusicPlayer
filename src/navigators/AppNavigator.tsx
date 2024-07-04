import React, { useEffect } from "react"
import { View, Text } from "react-native"
import MainNavigator from "./MainNavigator";
import AuthNavigator from "./AuthNavigator";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { addAuth, authSelector } from "../redux/reducers/authReducer";

const AppRouters = () => {

    const { getItem } = useAsyncStorage("auth");

    const auth = useSelector(authSelector)
    const dispatch = useDispatch();

    useEffect(() => {
        checkLogin();
    }, []);

    const checkLogin = async () => {

        const res = await getItem();

        console.log(res);
        res && dispatch(addAuth(JSON.parse(res)));
    }

    console.log(auth.accessToken);

    return <>
        {auth.accessToken ? <MainNavigator /> : <AuthNavigator />}
    </>




};

export default AppRouters;