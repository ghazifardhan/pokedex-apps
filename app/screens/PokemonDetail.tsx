import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { PokemonNavigateParamList } from "../App";
import { About } from "../components/about";
import { BaseStats } from "../components/base-stats";
import { PokemonDetailContext, PokemonDetailContextProvider, PokemonDetailContextType } from "../contexts/pokemon_detail/pokemon-detail-context";
import { capitalizeWord } from "../helpers/helpers";

type PokemonDetailProps = NativeStackScreenProps<PokemonNavigateParamList, 'PokemonDetail'>;

export const PokemonDetail = ({route, navigation}: PokemonDetailProps) => {
    return (
        <PokemonDetailContextProvider>
            <PokemonDetailState route={route} navigation={navigation}/>
        </PokemonDetailContextProvider>
    );
}
  
const renderScene = SceneMap({
    about: About,
    baseStats: BaseStats,
});

const PokemonDetailState = ({route, navigation}: PokemonDetailProps) => {

    const { pokemonDetail, loading, getPokemonDetail } = useContext(PokemonDetailContext) as PokemonDetailContextType;
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'about', title: 'About' },
        { key: 'baseStats', title: 'Base Stats' },
    ]);
 
    useEffect(() => {
        if (route.params) {
            getPokemonDetail(route.params.pokemonId);
        }
    }, [route])

    const renderHeader = (props: any) => <TabBar 
    {...props} 
    style={{ 
        backgroundColor: 'white', 
        color: 'blue', 
        elevation: 0, 
        borderBottomColor: '#c6c9cc', 
        borderBottomWidth: StyleSheet.hairlineWidth 
    }} 
    indicatorStyle={{ backgroundColor: 'blue' }}
    contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        elevation: 0
    }}
    labelStyle={{
        fontSize: 10,
        fontWeight: 'bold'
    }}
    activeColor={'#333333'}
    inactiveColor={'#959799'}
    />


    return (
        <View style={{
            flex: 1
        }}>
            {
                loading 
                ? <ActivityIndicator size={30}/>
                : 
                <View style={{
                    flex: 1,
                    flexDirection: 'column'
                }}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 32,
                            fontWeight: 'bold',
                            color: '#333333'
                        }}>{capitalizeWord(pokemonDetail.name)}</Text>
                        <Image
                            source={{
                                uri: pokemonDetail.sprites?.front_default
                            }}
                            style={{
                                width: 120,
                                height: 120
                            }}
                        />
                    </View>
                    <View 
                        style={{
                            flex: 2, 
                            backgroundColor: 'white',
                            borderTopLeftRadius: 20.0,
                            borderTopRightRadius: 20.0,
                            elevation: 2.0
                        }}>
                        <TabView
                            navigationState={{ index, routes }}
                            renderScene={renderScene}
                            onIndexChange={setIndex}
                            initialLayout={{ width: layout.width }}
                            style={{
                                borderTopLeftRadius: 20.0,
                                borderTopRightRadius: 20.0,
                                elevation: 2.0,
                            }}
                            renderTabBar={renderHeader}
                        />
                    </View>
                </View>
            }
        </View>
    );
}