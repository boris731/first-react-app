import React from "react";
import {Text,StyleSheet,FlatList,View} from 'react-native'
import { Button } from "react-native-web";

const students=[
    {name:'Sara',surname:'Saric',age:'25'},
    {name:'Nidal',surname:'Nidalovic',age:'28'},
    {name:'Lejla',surname:'Begic',age:'17'},
];

const movies=[
    {name:'Skyfall',year:'2012',duration:'2hrs'},
    {name:'Wolf of Wallstreet',year:'2004',duration:'2hrs 10min'},
    {name:'Fight Club',year:'2004',duration:'1hr 40min'},
]

const ListScreen=(props)=>{
    return (
    <View>
        <Text>ListScreen</Text>
        <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={student=>student.surname}
        data={students}
        renderItem={({item})=>{
            return <Text style={StyleSheet.studentWrapper}>{item.name}-{item.surname}-{item.age}</Text>
            
        }                            
    }
        />
        <FlatList
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={movie=>movies.name}
        data={movies}
        renderItem={({item})=>{
            return <Text style={StyleSheet.moviesWrapper}>{item.name}-{item.year}-{item.duration}</Text>
            
        }                            
    }
        />
        <Button title="Go back" 
        onPress={() => props.navigation.goBack()}/>
    </View>

 )
}

const style=StyleSheet.create({})

//export default ListScreen;

//NOVI SCREEN

let name = "Boris";
let surname = "Popović";
let date = "10.9.2006";
let index = "1";


const ocjene=[
    {ocjena: '10', predmet: 'Ekonomija'},
    {ocjena: '8', predmet: 'Matematika'},
    {ocjena: '8', predmet: 'Praksa'},
];

const hobiji=[
    {hobi: 'Programiranje'},
    {hobi: 'Teretana'},
    {hobi: 'Čitanje'},
];

const ListScreen1=()=>{
    return (
    <View>
        <Text>Ocjene</Text>
        <FlatList
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={ocjena=>ocjena.ocjena}
        data={ocjene}
        renderItem={({item})=>{
            return <Text style1={StyleSheet.ocjeneWrapper}>{item.ocjena}-{item.predmet}</Text>
            
        }                            
    }
        />
        <Text>Hobbies</Text>
        <FlatList
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={hobi=>hobi.hobi}
        data={hobiji}
        renderItem={({item})=>{
            return <Text style1={StyleSheet.hobijiWrapper}>{item.hobi}</Text>
            
        }                            
    }
        />
     
    
    </View>
 )
}

const style1=StyleSheet.create({})



const InfoScreen=()=>{
    return (
        <View style={styles.container}>
            <Text>Student Info:</Text>
            <Text>{name}</Text>
            <Text>{surname}</Text>
            <Text>{date}</Text>
            <Text>{index}</Text>
            <Text>{ocjene}</Text>
            <Text>{hobiji}</Text>
            <Text>Ocjene</Text>
                <FlatList
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={ocjena=>ocjena.ocjena}
                data={ocjene}
                renderItem={({item})=>{
                    return <Text style1={StyleSheet.ocjeneWrapper}>{item.ocjena}-{item.predmet}</Text>
                    
                }                            
            }
                />
                <Text>Hobbies</Text>
                <FlatList
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={hobi=>hobi.hobi}
                data={hobiji}
                renderItem={({item})=>{
                    return <Text style1={StyleSheet.hobijiWrapper}>{item.hobi}</Text>
                    
                }                            
            }
                />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        fontWeight: 400,
    }
})

export default InfoScreen;