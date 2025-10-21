import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";


class UserScreen extends React.Component {

    constructor() {
            super();
            this.state = {
                users: [],    
            }
        }
    
    async componentDidMount() {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const firstTen = jsonData.slice(0, 10);
        this.setState({
            users: firstTen,
        }); 
    }
    
    render() { 
        const { users } = this.state;
        return (
            <View>
                <Text>Users Screen</Text>
                <FlatList
                    keyExtractor={users => users.id}
                    data={users}
                    renderItem={({item}) => (
                        <View> 
                            <Text>{item.title}</Text>
                            <Text>{item.body}</Text>
                        </View>
                    )}
                />
            </View>
        );
    }
    
}

export default UserScreen;