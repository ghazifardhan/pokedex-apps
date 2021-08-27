import React from "react"
import { useContext } from "react"
import { StyleSheet } from "react-native"
import { Text, View } from "react-native"
import { PokemonDetailContext, PokemonDetailContextType } from "../contexts/pokemon_detail/pokemon-detail-context"
import { capitalizeWord } from "../helpers/helpers"

export const BaseStats = () => {

    const { pokemonDetail } = useContext(PokemonDetailContext) as PokemonDetailContextType;
    

    return (
        <View style={{
            flex: 1,
            flexDirection: 'row',
            padding: 20.0
        }}>
            <View style={{flex: 1}}>
                <Text style={styles.pokeText}>HP</Text>
                <Text style={styles.pokeText}>Attack</Text>
                <Text style={styles.pokeText}>Defense</Text>
                <Text style={styles.pokeText}>Sp. Atk</Text>
                <Text style={styles.pokeText}>Sp. Def</Text>
                <Text style={styles.pokeText}>Speed</Text>
            </View>
            <View style={{flex: 2}}>
                <Text style={styles.pokeValue}>
                    {
                        pokemonDetail.stats?.find(el => el.stat?.name == 'hp')?.base_stat
                    }
                </Text>
                <Text style={styles.pokeValue}>
                    {   
                        pokemonDetail.stats?.find(el => el.stat?.name == 'attack')?.base_stat
                    }
                </Text>
                <Text style={styles.pokeValue}>
                    {   
                        pokemonDetail.stats?.find(el => el.stat?.name == 'defense')?.base_stat
                    }
                </Text>
                <Text style={styles.pokeValue}>
                    {   
                        pokemonDetail.stats?.find(el => el.stat?.name == 'special-attack')?.base_stat
                    }
                </Text>
                <Text style={styles.pokeValue}>
                    {   
                        pokemonDetail.stats?.find(el => el.stat?.name == 'special-defense')?.base_stat
                    }
                </Text>
                <Text style={styles.pokeValue}>
                    {   
                        pokemonDetail.stats?.find(el => el.stat?.name == 'speed')?.base_stat
                    }
                </Text>
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