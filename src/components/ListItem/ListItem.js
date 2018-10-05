import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const listItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={style.listItem}>
        <Text>
            {props.placeName}
        </Text>
    </View>
    </TouchableOpacity>
);

const style = StyleSheet.create({
    listItem: {
        width: "100%",
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#eee"
    }
});

export default listItem;