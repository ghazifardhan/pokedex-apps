import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { capitalizeWord } from "../helpers/helpers";
import { Result } from "../models/item-list-model";

interface ItemCardProps {
    item: Result,
    onPress: () => void
}

export const ItemCard = (props: ItemCardProps) => {
    return (
        <TouchableOpacity style={{
            flex: 1,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#49D0AF',
            margin: 10.0,
            padding: 20.0,
            borderRadius: 10,
            elevation: 1,
        }}
        onPress={props.onPress}>
            <Text style={{
                fontSize: 14,
                color: 'white',
                fontStyle: 'normal',
                fontWeight: 'bold'
            }}>
                {capitalizeWord(props.item.name?.replace('-', ' '))}
            </Text>
        </TouchableOpacity>
    );
}