import React from "react"
import { useContext } from "react"
import { StyleSheet } from "react-native"
import { Text, View } from "react-native"
import { PokemonDetailContext, PokemonDetailContextType } from "../contexts/pokemon_detail/pokemon-detail-context"
import { capitalizeWord } from "../helpers/helpers"

export const About = () => {

    const { pokemonDetail } = useContext(PokemonDetailContext) as PokemonDetailContextType;

    return (
        <View style={{
            flex: 1,
            flexDirection: 'row',
            padding: 20.0
        }}>
            <View style={{flex: 1}}>
                <Text style={styles.pokeText}>Species</Text>
                <Text style={styles.pokeText}>Height</Text>
                <Text style={styles.pokeText}>Weight</Text>
                <Text style={styles.pokeText}>Abilities</Text>
            </View>
            <View style={{flex: 2}}>
                <Text style={styles.pokeValue}>{capitalizeWord(pokemonDetail.species?.name)}</Text>
                <Text style={styles.pokeValue}>{pokemonDetail.height}</Text>
                <Text style={styles.pokeValue}>{pokemonDetail.weight}</Text>
                <View style={{flexDirection:'row'}}>
                    {
                        pokemonDetail.abilities?.map((item, index) => <Text key={index} style={styles.pokeValue}>{capitalizeWord(item.ability?.name)}{index == 0 ? ", " : ""}</Text>)
                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    pokeText: {
        marginBottom: 10.0,
        fontWeight: '600',
        color: 'grey'
    },
    pokeValue: {
        marginBottom: 10.0,
        fontWeight: '600',
        color: '#333333'
    },
})