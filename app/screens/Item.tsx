import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { View, FlatList, SafeAreaView, StatusBar, ActivityIndicator } from "react-native";
import { PUBLIC_API } from "../api/constants";
import { ItemNavigateParamList } from "../App";
import { ItemCard } from "../components/item-card";
import { ItemContext, ItemContextProvider, ItemContextType } from "../contexts/item/item-context";

type ItemProps = NativeStackScreenProps<ItemNavigateParamList, 'Item'>;

export const Item = ({route, navigation}: ItemProps) => {
    return(
        <ItemContextProvider>
            <ItemState route={route} navigation={navigation}/>
        </ItemContextProvider>
    )
}

const ItemState = ({route, navigation}: ItemProps) => {

    const { items, loading, offset, limit, loadMore, getItems, itemLoadMore } = useContext(ItemContext) as ItemContextType;

    return(
        <SafeAreaView>
            <StatusBar barStyle={'light-content'} />
            <View>
                {
                    loading 
                    ? <ActivityIndicator/>
                    : <FlatList
                        data={items}
                        numColumns={2}
                        style={{
                            paddingLeft: 20.0,
                            paddingRight: 20.0,
                        }}
                        onEndReached={(e) => {
                            if (!loadMore) return itemLoadMore();
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
                            return <ItemCard 
                                item={item}
                                onPress={() => {
                                    var pokeId = item.url?.replace(PUBLIC_API + '/item/', '').replace('/', '');
                                    navigation.push('ItemDetail', {
                                        itemId: parseInt(pokeId!),
                                        title: item.name!.replace('-', ' ')
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