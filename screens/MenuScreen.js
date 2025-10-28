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
            <Button
            style={styles.btn}
                title="Go to Box Screen"
                onPress={() => props.navigation.navigate("Box")}
            />  
            <Button
            style={styles.btn}
                title="Go to Advanced Box Screen"
                onPress={() => props.navigation.navigate("Advanced Box")}
            />  
            <Button
            style={styles.btn}
                title="Go to Advanced Box Screen"
                onPress={() => props.navigation.navigate("Posts")}
            />  
            <Button
            style={styles.btn}
                title="Go to Users  Screen"
                onPress={() => props.navigation.navigate("Users")}
            />
            <Button
            style={styles.btn}
                title="Go to Photo Screen"
                onPress={() => props.navigation.navigate("Photo")}
            />
            <Button
            style={styles.btn}
                title="Go to Country Screen"
                onPress={() => props.navigation.navigate("Countries")}
            />
            <Button
            style={styles.btn}
                title="Go to Details Screen"
                onPress={() => props.navigation.navigate("Details")}
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