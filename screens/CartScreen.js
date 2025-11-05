import React from 'react'
import { View, Text, FlatList, StyleSheet, ThouchableOpacity, Image, ScrollView, Button } from 'react-native'
import data from "../data/products.json";

class CartScreen extends React.Component {
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
}