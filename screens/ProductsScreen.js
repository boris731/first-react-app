import React from 'react'
import { View, Text, FlatList, StyleSheet, ThouchableOpacity, Image, ScrollView } from 'react-native'
import data from "../data/products.json";
import Product from '../components/Product';

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
                    <Text style={styles.container}>Top products of 2020</Text>
                    <FlatList
                        data={this.state.products}
                        renderItem={({item}) => (
                            <View style={styles.container}>
                                <Product 
                                    name={item.name}
                                    category={item.category}
                                    price={item.price}
                                    stock={item.stock}
                                    image={item.image}
                                    desc={item.description}
                                />
                            </View>
                        )}
                    />
                </View>
        )
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
});

export default ProductsScreen;