import React from 'react'
import { View, Text, FlatList, StyleSheet, ThouchableOpacity, Image, ScrollView, Button } from 'react-native'
import data from "../data/products.json";
import Product from '../components/Product.js';

class ProductsScreen extends React.Component {
    constructor () {
        super();
        this.state = {
            products: [],
            cart: [],
        }
    }

    componentDidMount() {
        this.setState({
            products: data,
        });
    }

    render() {
        return(
                <View  style={styles.container}>
                    <Text style={styles.title}>Top products of 2020</Text>
                    <FlatList
                        data={this.state.products}
                        renderItem={({item}) => (
                            <View>
                                <Product 
                                    name={item.name}
                                    category={item.category}
                                    price={item.price}
                                    stock={item.stock}
                                    image={item.image}
                                    desc={item.description}
                                />
                                <Button             
                                style={styles.btn}
                                title="Add to Cart"
                                onPress={this.addToCart(item)} />
                            </View>
                        )}
                    />
                </View>
        )
    }
    
    addToCart(item){
        this.state.cart.push(item)
        console.log(this.state.cart)
        
    }
    

}




const styles = StyleSheet.create({
    container: {
        allingItems: "center",
    },

    title: {
        fontSize: 20,
        marginVertical: 20,
        fontWeight: "bold",
    },
    btn: {
        color: "white",
        backgroundColor: "blue",
    }
});

export default ProductsScreen;