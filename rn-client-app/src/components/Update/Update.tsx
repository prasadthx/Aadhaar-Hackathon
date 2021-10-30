import {Button, Text, View} from "react-native";
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CaptchaVerify from "./CaptchaVerify/CaptchaVerify";
import AadhaarEnter from "./AadhaarEnter/AadhaarEnter";
import EnterOTP from "./OTPEnter/EnterOTP";

const UpdateNav = createNativeStackNavigator();

const Update = ({ navigation }:any) => {
    return (
        <UpdateNav.Navigator>
            <UpdateNav.Screen name="AadhaarEnter" component={AadhaarEnter}/>
            <UpdateNav.Screen name="CaptchaVerify" component={CaptchaVerify}/>
            <UpdateNav.Screen name="EnterOTP" component={EnterOTP}/>
        </UpdateNav.Navigator>
    );
}

export default Update;
