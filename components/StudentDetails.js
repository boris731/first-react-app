import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";


const StudentDetails = (props) => {
    return(
        <View>
            <View source={styles.cardWrapper}>
                <View>
                    <Image source={props.image}></Image>
                </View>
                <View source={styles.infoWrapper}>
                    <Text style={styles.text}>{props.name}</Text>
                    <Text>{props.description}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardWrapper: {
        flexDirection: "row",
        Background: "white",
        borderRadius: 8,
        width: "90%",
        alignSelf: "center",
        marginBottom: 15,
    },
    img: {
        width: 100,
        height: 100,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    infoWrapper: {
        marginLeft: 20,
        marginTop: 20,
    },
});

export default StudentDetails;