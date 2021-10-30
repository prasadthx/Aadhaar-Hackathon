import {Button, Text, View} from "react-native";
import React from "react";
import TaskBar from "../TaskBar/Taskbar";

const Help = ({ navigation }:any) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{color:"#000000"}}>Settings Screen</Text>
        </View>
    );
}

export default Help;
