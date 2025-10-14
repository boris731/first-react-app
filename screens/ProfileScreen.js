import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Profileinfo from "../components/Profileinfo";

const ProfileScreen = () => {
    return (
        <View>
            <Text style={styles.text}>ProfileScreen</Text>
            <Profileinfo 
                Name="Boris" 
                Image={require("../assets/icon.png")} 
                Skill="HTML/CSS/JS Web developer"
                Description="Developing FrontEnd Web sites with passion!"
                Hirebtn="HIRE HIM"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    cardWrapper: {
        backgroundColor: "white",
    },
    text: {
        textAlign: "center",
        fontSize: 20,
        marginVertical: 20,
    },
    
});

export default ProfileScreen;

