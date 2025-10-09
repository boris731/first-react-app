import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";



const MenuScreen = (props) => {
    return (
        <View>
            <Text>Welcome to Menu Screen</Text>
            <Button
                title="Go to List Screen"
                onPress={() => props.navigation.navigate("List")}
            /> 
            <TouchableOpacity
            style={styles.quiz}
            onPress={() => props.navigation.navigate("Quiz")}>
                <Text>Go to Quiz Screen</Text>
            </TouchableOpacity>
            <Button
            style={styles.btn}
                title="Go to Students Screen"
                onPress={() => props.navigation.navigate("Students")}
            /> 
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        fontSize: 20,
        marginVertical: 20,
    },
    quiz: {
        alignContent: "center",
        backgroundColor: "blue",
        color: "white",
        textAlign: "center",
        fontSize: 50,
        marginVertical: 20,
        width: 200,
    }

});

export default MenuScreen