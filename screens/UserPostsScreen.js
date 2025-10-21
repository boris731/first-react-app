import React from "react";
import { View, Text, StyleSheet, FlatList, ThouchableOpacity } from "react-native";

class UserPostsScreen extends React.Component {

    constructor() {
            super();
            this.state = {
                users: [],    
            }
        }
    
    async componentDidMount() {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const jsonData = await data.json();
        this.setState({
            posts: jsonData,
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
                            <ThouchableOpacity
                            >{item.title}</ThouchableOpacity>
                            <ThouchableOpacity>{item.body}</ThouchableOpacity>
                        </View>
                    )}
                />
            </View>
        );
    }
    
}

export default UserPostsScreen;