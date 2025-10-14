import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const Projects = (props) => {
    return(
        <View>
            <View source={styles.cardWrapper}>
                <View source={styles.infoWrapper}>
                    <Text style={styles.text}>{props.title}</Text>
                </View>
                <Button>{props.viewallbtn}</Button>
                <View>
                    <Image source={props.project1}></Image>
                </View>
                <View>
                    <Image source={props.project2}></Image>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        fontSize: 20,
        marginVertical: 20,
    },
});

export default Projects;