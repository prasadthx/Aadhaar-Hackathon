import React, { Component } from 'react';
import { View, SafeAreaView, Dimensions, StyleSheet, Animated } from 'react-native';
import * as shape from "d3-shape";
import Svg, { Path } from 'react-native-svg';
import StaticTabbar, { tabHeight as height } from './StaticTaskBar';
import tabs from "./tabs";
const { width } = Dimensions.get('window');

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const tabWidth = width / tabs.length;

const getPath = (): string => {
    // @ts-ignore
    const left = shape.line().x(d => d.x).y(d => d.y)([
        { x: 0, y: 0 },
        { x: width, y: 0 },
    ]);
    // @ts-ignore
    const tab = shape.line()
        // @ts-ignore
        .x(d => d.x)
        // @ts-ignore
        .y(d => d.y)
        .curve(shape.curveBasis)([
            { x: width, y: 0 },
            { x: width + 5, y: 0 },
            { x: width + 7, y: 10 },
            { x: width + 7, y: height },
            { x: width + tabWidth - 7, y: height },
            { x: width + tabWidth - 7, y: 7 },
            { x: width + tabWidth - 5, y: 0 },
            { x: width + tabWidth, y: 0 },
        ]);
    // @ts-ignore
    const right = shape.line().x(d => d.x).y(d => d.y)([
        { x: width + tabWidth, y: 0 },
        { x: width * 2, y: 0 },
        { x: width * 2, y: height },
        { x: 0, y: height },
        { x: 0, y: 0 },
    ]);
    return `${left} ${tab} ${right}`;
};
const d = getPath();

interface Props {
    navigation:any;
}

const TaskBar = (props:Props) => {
    const translateX = new Animated.Value(-width + tabWidth * 2);
        return (
            <>
                <View {...{ width, height }}>
                    <AnimatedSvg
                        width={width * 2}
                        style={{ transform: [{ translateX }] }}
                        {...{ height, }} >
                        <Path {...{ d }} fill='white' />
                    </AnimatedSvg>
                    <View style={StyleSheet.absoluteFill}>
                        <StaticTabbar
                            value={translateX}
                            {...{ tabs }}
                            navigation={props.navigation}
                        />
                    </View>
                </View>
                <SafeAreaView style={styles.safeArea} />
            </>
        )
}

export default TaskBar;

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#333'
    },
})
