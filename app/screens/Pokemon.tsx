import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { View, FlatList, SafeAreaView, StatusBar, ActivityIndicator } from "react-native";
import { PUBLIC_API } from "../api/constants";
import { PokemonNavigateParamList } from "../App";
import { PokemonCard } from "../components/pokemon-card";
import { PokemonContext, PokemonContextProvider, PokemonContextType } from "../contexts/pokemon/pokemon-context";

type PokemonProps = NativeStackScreenProps<PokemonNavigateParamList, 'Pokemon'>;

export const Pokemon = ({route, navigation}: PokemonProps) => {
    return(
        <PokemonContextProvider>
            <PokemonState route={route} navigation={navigation}/>
        </PokemonContextProvider>
    )
}

const PokemonState = ({route, navigation}: PokemonProps) => {

    const { pokemons, loading, offset, limit, loadMore, getPokemons, pokemonLoadMore } = useContext(PokemonContext) as PokemonContextType;

    return(
        <SafeAreaView>
            <StatusBar barStyle={'light-content'} />
            <View>
                {
                    loading 
                    ? <ActivityIndicator/>
                    : <FlatList
                        data={pokemons}
                        numColumns={2}
                        style={{
                            paddingLeft: 20.0,
                            paddingRight: 20.0,
                        }}
                        onEndReached={(e) => {
                            if (!loadMore) return pokemonLoadMore();
                        }}
                        onEndReachedThreshold={0.5}
                        ListFooterComponent={
                            loadMore ? <ActivityIndicator
                                size={30}
                                style={{
                                    margin: 20.0
                                }}
                            /> : <View/>
                        }
                        keyExtractor={(x, y) => y.toString()}
                        renderItem={({item}) => {
                            return <PokemonCard 
                                item={item}
                                onPress={() => {
                                    var pokeId = item.url?.replace(PUBLIC_API + '/pokemon/', '').replace('/', '');
                                    navigation.push('PokemonDetail', {
                                        pokemonId: parseInt(pokeId!),
                                        title: item.name!
                                    });
                                }}
                            />
                        }}
                    />
                }
            </View>
        </SafeAreaView>
    );
}