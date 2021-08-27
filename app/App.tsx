import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Pokemon } from "./screens/Pokemon";
import { Item } from "./screens/Item";
import { NavigationContainer  } from "@react-navigation/native";
import { PokemonDetail } from "./screens/PokemonDetail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import { capitalizeWord } from "./helpers/helpers";
import { ItemDetail } from "./screens/ItemDetail";

export type BottomNavigateParamList = {
    PokemonStackScreen: undefined,
    ItemStackScreen: undefined,
}

export type PokemonNavigateParamList = {
    Pokemon: undefined,
    PokemonDetail: {
        pokemonId: number,
        title: string
    }
}

export type ItemNavigateParamList = {
    Item: undefined,
    ItemDetail: {
        itemId: number,
        title: string
    }
}

const PokemonStack = createNativeStackNavigator<PokemonNavigateParamList>();
const ItemStack = createNativeStackNavigator<ItemNavigateParamList>();
const BottomStack = createBottomTabNavigator<BottomNavigateParamList>();

interface TabIconProps {
    icon: string,
    focused: boolean
}
  
const TabIcon = (props: TabIconProps) => {
    return <Icon name={props.icon} size={24} color={'grey'}/>
}

const PokemonStackScreen = () => {
    return (
        <PokemonStack.Navigator>
            <PokemonStack.Screen
                name="Pokemon"
                component={Pokemon}
            />
            <PokemonStack.Screen 
                name={'PokemonDetail'}
                component={PokemonDetail}
                options={({ route }) => ({
                    title: capitalizeWord(route.params.title)
                })}
            />
        </PokemonStack.Navigator>
    );
}

const ItemStackScreen = () => {
    return (
        <ItemStack.Navigator>
            <ItemStack.Screen
                name="Item"
                component={Item}
            />
            <ItemStack.Screen 
                name={'ItemDetail'}
                component={ItemDetail}
                options={({ route }) => ({
                    title: capitalizeWord(route.params.title)
                })}
            />
        </ItemStack.Navigator>
    );
}

function App() {

    return(
        <NavigationContainer>
            <BottomStack.Navigator>
                <BottomStack.Screen
                name={'PokemonStackScreen'}
                component={PokemonStackScreen}
                options={{
                    title: 'Pokemon',
                    header: () => <View/>,
                    tabBarIcon: ({focused, color }) => {
                        return <TabIcon icon={'pokeball'} focused={focused}/>
                    },
                }}
                />
                <BottomStack.Screen
                name={'ItemStackScreen'}
                component={ItemStackScreen}
                options={{
                    title: 'Item',
                    header: () => <View/>,
                    tabBarIcon: ({focused, color }) => {
                        return <TabIcon icon={'pokemon-go'} focused={focused}/>
                    },
                }}
                />
            </BottomStack.Navigator>
        </NavigationContainer>
    );

}

export default App;

