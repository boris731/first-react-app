import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native-web";

const Profileinfo = (props) => {
    return (
        <View>
            <View source={styles.cardWrapper}>
                <View source={styles.img}>
                    <Image source={props.Image}></Image>
                </View>
                <View source={styles.infoWrapper}>
                    <Text style={styles.text}>{props.Name}</Text>
                    <Text>{props.Skill}</Text>
                    <Text>{props.Description}</Text>
                    <TouchableOpacity>{props.Hirebtn}</TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardWrapper: {
        backgroundColor: "white",
    },
    text: {
        textAlign: "center",
        fontSize: 20,
        marginVertical: 20,
    },
    img: {
        width: 15,
        height: 15,
    }
});

export default Profileinfo;



