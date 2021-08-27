import React from "react"
import { useContext } from "react"
import { StyleSheet } from "react-native"
import { Text, View } from "react-native"
import { ItemDetailContext, ItemDetailContextType } from "../contexts/item_detail/item-detail-context"
import { capitalizeWord } from "../helpers/helpers"

export const Attributes = () => {

    const { itemDetail } = useContext(ItemDetailContext) as ItemDetailContextType;

    return (
        <View style={{
            flex: 1,
            flexDirection: 'row',
            padding: 20.0
        }}>
            <View style={{flex: 1}}>
                {
                    itemDetail.attributes?.map((item, index) => {
                        return <Text key={index} style={styles.pokeText}>Attribute {index+1}</Text>
                    })
                }
            </View>
            <View style={{flex: 2}}>
                {
                    itemDetail.attributes?.map((item, index) => {
                        return <Text key={index} style={styles.pokeValue}>{capitalizeWord(item.name?.split('-').join(" "))}</Text>
                    })
                }
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