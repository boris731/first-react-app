import React from 'react'
import { View, Text, FlatList, StyleSheet, ThouchableOpacity } from 'react-native'
import data from "../data/countries.json";

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
    screentitle: {
        fontSize: 20,
        textAlign: "center",
        marginVertical: 15,
        fontWeight: "bold",
    },
})

