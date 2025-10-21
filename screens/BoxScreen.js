import React from "react";
import { Text, StyleSheet, View } from "react-native";


const BoxScreen = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.box1Style}></View>
            <View style={styles.box2Style}></View>
            <View style={styles.box3Style}></View>
            <View style={styles.box4Style}></View>
            <View style={styles.box5Style}></View>
            <View style={styles.box6Style}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "space-evenly",
    },
    box1Style: {
        width: 100,
        height: 100,
        backgroundColor: "red",
    },
    box2Style: {
        width: 100,
        height: 100,
        backgroundColor: "green",
    },
    box3Style: {
        width: 100,
        height: 100,
        backgroundColor: "blue",
    },
     box4Style: {
        width: 100,
        height: 100,
        backgroundColor: "red",
    },
    box5Style: {
        width: 100,
        height: 100,
        backgroundColor: "green",
    },
    box6Style: {
        width: 100,
        height: 100,
        backgroundColor: "blue",
    },
});


const BoxScreenChallange = () => {
    return (

        <View style={styles1.wrapper}>
            <View style={styles1.box1Style}></View>
            <View style={styles1.box2Style}></View>
            <View style={styles1.box3Style}></View>
        </View>
    );
};

const styles1 = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "space-evenly",
    },
    box1Style: {
        width: 100,
        height: 100,
        backgroundColor: "red",

    },
    box2Style: {
        width: 100,
        height: 100,
        backgroundColor: "green",
        alignSelf: "center",
    },
    box3Style: {
        width: 100,
        height: 100,
        backgroundColor: "blue",
    },
});

const AdvancedBoxScreenChallange = () => {
    return (
        <View style={styles3.wrapper}>
            <View style={styles3.box1Style}></View>
            <View style={styles3.box2Style}></View>
            <View style={styles3.box3Style}></View>
        </View>
    );
}

const styles3 = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: "column",
        flexWrap: "wrap",
    },
    box1Style: {
        width: 100,
        height: 100,
        backgroundColor: "red",

    },
    box2Style: {
        width: 100,
        height: 100,
        backgroundColor: "green",
        alignSelf: "center",
    },
    box3Style: {
        width: 100,
        height: 100,
        backgroundColor: "blue",
    },
});

export default AdvancedBoxScreenChallange;
