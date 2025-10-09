import React from "react";
import { Text, View, StyleSheet } from "react-native-web";
import StudentDetails from "../components/StudentDetails"

const StudentScreen = () => {
    return (
        <View>
            <Text style={styles.text}>Students Screen</Text>
            <StudentDetails 
                name="Dušan" 
                image={require("../assets/icon.png")} 
                descriprion="Prvi student"
            />
            <StudentDetails name="Marko"/>
            <StudentDetails name="Haris"/>

        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        fontSize: 20,
        marginVertical: 20,
    },
});

export default StudentScreen;