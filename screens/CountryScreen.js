import React from 'react'
import { View, Text, FlatList, StyleSheet, ThouchableOpacity } from 'react-native'
import data from "../data/countries.json";

class CountriesScreen extends React.Component {
    constructor () {
        super();
        this.state = {
            countries: [],
        }
    }

    componentDidMount() {
        this.setState({
            countries: data,
        });
    }

    render() {
        return(
            <View>
                <Text>Countries Screen</Text>
                <FlatList
                    data={this.state.countries}
                    keyExtractor={countries => countries.id}
                    renderItem={({ item }) => (
                        
                        <View> 
                            <ThouchableOpacity
                            onPress={() => props.navigation.navigate("Details")}>
                            
                                <Text>City name: {item.name}</Text>
                                <Text>Country name: {item.country}</Text>
                                <Text>City description: {item.description}</Text>
                                <Text>City population: {item.population}</Text>
                            </ThouchableOpacity>
                        </View>
                    )}
                />
            </View>
    
        );
    }

}



const styles = StyleSheet.create({
    screentitle: {
        fontSize: 20,
        textAlign: "center",
        marginVertical: 15,
        fontWeight: "bold",
    },
})

export default CountriesScreen;