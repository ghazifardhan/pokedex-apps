import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { capitalizeWord } from "../helpers/helpers";
import { Result } from "../models/pokemon-list-model";

interface PokemonCardProps {
    item: Result,
    onPress: () => void
}

export const PokemonCard = (props: PokemonCardProps) => {
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
            <Image
                source={{
                    uri: `https://img.pokemondb.net/sprites/bank/normal/${props.item.name}.png`
                }}
                style={{
                    width: 60,
                    height: 60
                }}
            />  
            <Text style={{
                fontSize: 14,
                color: 'white',
                fontStyle: 'normal',
                fontWeight: 'bold'
            }}>
                {capitalizeWord(props.item.name)}
            </Text>
        </TouchableOpacity>
    );
}