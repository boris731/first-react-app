import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";


class PhotoScreen extends React.Component {

    constructor() {
            super();
            this.state = {
                photos: [],    
            }
        }
    
    async componentDidMount() {
        const data = await fetch("https://jsonplaceholder.typicode.com/photos");
        const jsonData = await data.json();
        this.setState({
            photos: jsonData,
        }); 
    }
    
    render() { 
        const { photos } = this.state;
        return (
            <View>
                <Text>Photos Screen</Text>
                <FlatList
                    keyExtractor={photos => photos.id}
                    data={photos}
                    renderItem={({item}) => (
                        <View style={styles.cardWrapper}> 
                            <View style={styles.textcontainer}> 
                                <Text style={styles.text}>{item.title}</Text>
                            
                            </View>
                            <View style={styles.imagecontainer}>
                                <Image source={require("../assets/icon.png")} style={styles.image}></Image>
                            </View>
                            
                        </View>
                            
                    )}
                />
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    cardWrapper: {
        backgroundColor: "beige",
        alignContent: "space-between",
    },
    text: {
        fontWeight: "bold",
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 20,

    },
    imagecontainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",

    },
    textcontainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
    }


});

export default PhotoScreen;