import React from 'react'
import { View, Text, FlatList, StyleSheet, ThouchableOpacity, Image } from 'react-native'
import data from "../data/products.json";

class ProductsScreen extends React.Component {
    constructor () {
        super();
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        this.setState({
            products: data,
        });
    }

    render() {
        return(
            <View>
                <Text>Products Screen</Text>
                <FlatList
                    data={this.state.products}
                    keyExtractor={products => products.id}
                    renderItem={({ item }) => (
                        
                        <View style={styles.cardWrapper}> 
                            <Image source={{uri:item.image}} style={styles.img}></Image>
                            <Text>Name: {item.name}</Text>
                            <Text>Category: {item.category}</Text>
                            <Text>Price: {item.price}</Text>
                            <Text>Stock: {item.stock}</Text>
                            <Text>Description: {item.description}</Text>
                        </View>
                    )}
                />
            </View>
    
        );
    }

}



const styles = StyleSheet.create({
    img:
    {
        flex: 1, 
        width: 250,
        height: 250,
        resizeMode:'contain'
    },
    cardWrapper: 
    {
        flex: 1,
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "center",
        padding: 60,
        backgroundColor: "white",
        borderRadius: 20,
    },
})

export default ProductsScreen;