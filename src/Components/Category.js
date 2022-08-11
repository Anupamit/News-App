import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const Category = () => {
    const categorynav = ['Entertainment','Sports','Politics','Business','Health','Technology']

    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {categorynav.map((category,index)=> (
                    <TouchableOpacity
                        key={index}
                        onPress={() => props.navigation.navigate('GetNews', {category})}>
                        <View>
                        <Text
                            style={{
                            padding: 10,
                            borderWidth: 1,
                            borderColor: 'black',
                            fontSize: 19,
                            margin: 10,
                            borderRadius: 10,
                            }}>
                            {category}
                        </Text>
                        </View>
                    </TouchableOpacity>
            ))}
        </ScrollView>
    )
}

export default Category