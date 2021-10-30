import React, { Component } from 'react';
import {View, TouchableWithoutFeedback, StyleSheet, Dimensions, Animated, Text} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
interface Tab {
    name: string,
}
interface Props {
    tabs: Tab[],
    value: Animated.Value,
    navigation:any
}
export const tabHeight = 50;
const { width } = Dimensions.get('window');

export default class StaticTabbar extends Component<Props> {
    values: Animated.Value[] = []
    constructor(props: Props) {
        super(props);
        const { tabs } = this.props;
        this.values = tabs.map((tab, index) => new Animated.Value(index === 0 ? 1 : 0))
        Animated.sequence([Animated.parallel([
            Animated.parallel([
                Animated.spring(this.values[2], {
                    toValue: 1,
                    useNativeDriver: true,
                }),
                Animated.spring(this.props.value, {
                    toValue: -width + width/this.props.tabs.length * (2),
                    useNativeDriver: true,
                })
            ]),
        ])]).start();
    }

    onPress = (index: number, duration:number, screen:any) => {
        const { value, tabs } = this.props;
        const tabWidth = width / tabs.length;
        Animated.sequence([
            ...this.values.map(value => Animated.timing(value, {
                toValue: 0,
                duration: duration,
                useNativeDriver: true,
            })),

            Animated.parallel([
                Animated.spring(this.values[index], {
                    toValue: 1,
                    useNativeDriver: true,
                }),
                Animated.spring(value, {
                    toValue: -width + tabWidth * (index),
                    useNativeDriver: true,
                })
            ]),
        ]).start()
        this.props.navigation.navigate(screen);
    }

    render() {
        const { tabs, value } = this.props;
        const tabWidth = width / tabs.length;
        return (
            <View style={styles.container}>
                {
                    tabs.map(({ name, title, screen}, index) => {
                        const activeValue = this.values[index];

                        const opacity = value.interpolate({
                            inputRange: [
                                -width + tabWidth * (index - 1),
                                -width + tabWidth * index,
                                -width + tabWidth * (index + 1),
                            ],
                            outputRange: [1, 0, 1],
                            extrapolate: 'clamp'
                        });

                        const translateY = activeValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [tabHeight, 0]
                        })

                        return (
                            <React.Fragment key={index}>
                                <TouchableWithoutFeedback
                                    key={index}
                                    onPress={() => this.onPress(index, 50, screen)}

                                >
                                    <Animated.View style={[styles.tab, { opacity }]}>
                                        <MaterialCommunityIcons size={20} {...{ name }} />
                                        <Text>{title}</Text>
                                    </Animated.View>
                                </TouchableWithoutFeedback>

                                <Animated.View
                                    style={{
                                        position: 'absolute',
                                        top: -8,
                                        width: tabWidth,
                                        left: tabWidth * index,
                                        height: tabHeight,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        transform: [{ translateY }]
                                    }}>
                                    <View style={styles.circle}>
                                        <MaterialCommunityIcons size={20} {...{ name }} />
                                    </View>
                                </Animated.View>
                            </React.Fragment>
                        )
                    })
                }
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    tab: {
        flex: 1,
        height: tabHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        width: 35,
        height: 35,
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
