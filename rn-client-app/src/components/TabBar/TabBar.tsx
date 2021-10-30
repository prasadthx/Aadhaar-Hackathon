import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useRef, useState} from "react";
import {Ionicons} from "@expo/vector-icons";
import {CurvedBottomBar} from "react-native-curved-bottom-bar/index";
import Profile from "../Profile/Profile";
import CheckIn from "../CheckIn/CheckIn";
import Update from "../Update/Update";
import Help from "../Help/Help";
import History from "../History/History";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const TabBar = () => {
    const ref = useRef();
    const [type, setType] = useState<'down' | 'up'>('down');

    const _renderIcon = (routeName: string, selectTab: string) => {
        let icon = '';

        switch (routeName) {
            case 'CheckIn':
                icon = 'account-check';
                break;
            case 'Update':
                icon = 'database-refresh';
                break;
            case 'History':
                icon = 'history';
                break;
            case 'Help':
                icon = 'help';
                break;
        }

        return (
            <MaterialCommunityIcons name={icon} size={23} color={routeName === selectTab ? '#FF3030' : 'gray'} />
        );
    };

    return (
        <View style={styles.container}>
            <CurvedBottomBar.Navigator
                ref={ref}
                type={type}
                height={60}
                circleWidth={55}
                bgColor="white"
                borderTopLeftRight={true}
                strokeWidth={2}
                swipeEnabled={true}
                initialRouteName="title1"
                renderCircle={({ selectTab, navigate }) => (
                    <TouchableOpacity
                        style={[type === 'down' ? styles.btnCircle : styles.btnCircleUp]} onPress={()=>navigate("Profile")}
                    >
                        <MaterialCommunityIcons name="account-settings" size={23} />
                    </TouchableOpacity>
                )}
                tabBar={({ routeName, selectTab, navigate }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {navigate(routeName)}}
                            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            {_renderIcon(routeName, selectTab)}
                            <Text>{routeName}</Text>
                        </TouchableOpacity>
                    );
                }}>
                <CurvedBottomBar.Screen
                    name="Profile"
                    position="center"
                    component={Profile}
                />
                <CurvedBottomBar.Screen
                    name="CheckIn"
                    position="left"
                    component={CheckIn}
                />
                <CurvedBottomBar.Screen
                    name="Update"
                    component={Update}
                    position="left"
                />
                <CurvedBottomBar.Screen
                    name="History"
                    position="right"
                    component={History}
                />
                <CurvedBottomBar.Screen
                    name="Help"
                    component={Help}
                    position="right"
                />
            </CurvedBottomBar.Navigator>
        </View>
    );
};

export default TabBar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btnCircle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 1,
        bottom: 28
    },
    btnCircleUp: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E8E8E8',
        bottom: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 1,
    },
    imgCircle: {
        width: 30,
        height: 30,
        tintColor: '#48CEF6'
    },
    img: {
        width: 30,
        height: 30,
    }
});

