import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import TaskBar from "./src/components/TaskBar/Taskbar";
import Tabbar from "./src/components/TaskBar/Taskbar";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Update from "./src/components/Update/Update";
import CheckIn from "./src/components/CheckIn/CheckIn";
import Profile from "./src/components/Profile/Profile";
import History from "./src/components/History/History";
import Settings from "./src/components/Settings/Settings"
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
              <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} />
              <Stack.Screen name="CheckIn" component={CheckIn} options={{headerShown:false}} />
              <Stack.Screen name="Update" component={Update} options={{headerShown:false}} />
              <Stack.Screen name={"History"} component={Profile} options={{headerShown:false}} />
              <Stack.Screen name="Settings" component={Settings} options={{headerShown:false}} />
              {/*<Stack.Screen name="Details" component={DetailsScreen} />*/}
          </Stack.Navigator>
      </NavigationContainer>
    );
}

function HomeScreen({ navigation }:any) {
    return (
        <View style={styles.container}>
            <TaskBar navigation={navigation}/>
        </View>
    );
}

function DetailsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eb3345",
        justifyContent: "flex-end",
    },
});

export default App;
