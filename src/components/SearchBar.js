import React from "react";
import { Text, View, Button, StyleSheet, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

    return(
        <View style = {styles.backgroundStyle}>
            <Feather 
                name="search" 
                style = {styles.iconStyle}
            />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style = {styles.inputStyle}
                placeholder="Search"
                value = {term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#f0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginVertical: 10
    },
    inputStyle: {
        // borderColor: 'black',
        // borderWidth: 1,
        flex: 1
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    }
});

export default SearchBar;