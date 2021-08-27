import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { ItemNavigateParamList } from "../App";
import { About } from "../components/about";
import { Attributes } from "../components/attributes";
import { BaseStats } from "../components/base-stats";
import { EffectEntries } from "../components/effect-entries";
import { ItemDetailContext, ItemDetailContextProvider, ItemDetailContextType } from "../contexts/item_detail/item-detail-context";
import { capitalizeWord } from "../helpers/helpers";

type ItemDetailProps = NativeStackScreenProps<ItemNavigateParamList, 'ItemDetail'>;

export const ItemDetail = ({route, navigation}: ItemDetailProps) => {
    return (
        <ItemDetailContextProvider>
            <ItemDetailState route={route} navigation={navigation}/>
        </ItemDetailContextProvider>
    );
}
  
const renderScene = SceneMap({
    attributes: Attributes,
    effectEntries: EffectEntries,
});

const ItemDetailState = ({route, navigation}: ItemDetailProps) => {

    const { itemDetail, loading, getItemDetail } = useContext(ItemDetailContext) as ItemDetailContextType;
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'attributes', title: 'Attributes' },
        { key: 'effectEntries', title: 'Effect Entries' },
    ]);
 
    useEffect(() => {
        if (route.params) {
            getItemDetail(route.params.itemId);
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
                        }}>{capitalizeWord(itemDetail.name?.replace('-', ' '))}</Text>
                        <Image
                            source={{
                                uri: itemDetail.sprites?.default
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