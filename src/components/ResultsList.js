import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import ResultsDetails from "./ResultsDetails";

const ResultsList = ({ title, results }) => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>{title}</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data = {results}
                keyExtractor={(result) => results.id}
                renderItem={({item}) => {
                    return <ResultsDetails result={item}/>
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


export default ResultsList;