import React, { useState, useRef } from 'react';
import { StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import TaskBar from "./src/components/Taskbar/CustomTaskBar";
import Profile from "./src/components/Profile/Profile";
import TabBar from "./src/components/TabBar/TabBar";

// StatusBar.setBarStyle('dark-content');



const App = () => {
  return(
      <View style={styles.container}>
        <TabBar/>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
    },
});

export default App;


