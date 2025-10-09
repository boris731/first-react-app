import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity} from "react-native";


const ButtonScreen = () => {
    let counter = 0;
    return (
        <View>
            <Text>Button Screen</Text>
            <Button 
                title="Click me"
                onPress={() => console.log("Button Clicked: ", counter++)}
            ></Button> 
            <TouchableOpacity
            style={styles.touchableBtn}
                onPress={() => console.log("TouchableIoacity clicked:", counter++)}
            >
                <Text style={styles.txtStyle}> Click Touchable ELement</Text>
            </TouchableOpacity>
        </View>
    )
}


const QuizScreen = () => {
    return (
        <View>
            <Text style={styles.titleStyle}>Quiz Screen</Text>;
            <Text style={styles.qtitleStyle}>1. Kviz pitanje</Text>;
            <Text style={styles.question}>Koji rimski imperator je poznat kao filozof?</Text>
            <Button 
            style={styles.answerBtn}
                title="Marko Aurelije"
                onPress={() => console.log("Odgovor je tačan")}
            ></Button> 
            <Button 
            style={styles.answerBtn}
                title="Julije Cezar"
                onPress={() => console.log("Odgovor je netačan")}
            ></Button> 
            <Button 
            style={styles.answerBtn}
                title="August Oktavije"
                onPress={() => console.log("Odgovor je netačan")}
            ></Button> 
            <Button 
            style={styles.answerBtn}
                title="Neron"
                onPress={() => console.log("Odgovor je netačan")}
            ></Button> 
        </View>
    )
}


const styles = StyleSheet.create({
    touchableBtn: {
        backgroundColor: "purple",
        marginVertikal: 15,
        padding: 20,
        borderRadius: 6,
        marginHorizontal: 20,
    },
    txtStyle: {
        color: "white",
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
    },

    titleStyle: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
    },
    qtitleStyle: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
    question: {
        textAlign: "center",
        fontSize: 18,
    },
    answerBtn: {
        backgroundColor: "purple",
        marginVertikal: 15,
        padding: 20,
        borderRadius: 6,
        marginHorizontal: 20,
    },
});

export default QuizScreen;
