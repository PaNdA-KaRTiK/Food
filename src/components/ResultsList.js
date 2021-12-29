import React from "react";
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import ResultsDetails from "./ResultsDetails";
import { withNavigation} from 'react-navigation';

const ResultsList = ({ title, results, navigation }) => {
    if(!results.length){
        return null;
    }
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>{title}</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data = {results}
                keyExtractor={(result) => results.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.id})}>
                            <ResultsDetails result={item}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
};


const styles = StyleSheet.create({
    title:{
        marginLeft: 15,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});


export default withNavigation(ResultsList);