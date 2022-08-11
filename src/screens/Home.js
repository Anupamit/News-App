import { View, ActivityIndicator, ScrollView, Text, Image,Dimensions,TouchableOpacity, } from 'react-native'
import React, {useState, useEffect } from 'react'
import Category from '../Components/Category'
import Trendingnews from '../Components/Trendingnews'


const Home = (props) => {

    const deviceWidth = Dimensions.get('window').width;
    const [homeNews,setHomeNews] =useState([])

    useEffect(()=>{
        fetchNewsData()
    }, [])

    const fetchNewsData =async()=>{
        let apiurl=`https://newsapi.org/v2/top-headlines?country=in&apiKey=a6032d9eb72842d38085288bb97e6740`
        let response=await fetch(apiurl);
        let responseJson= await response.json();
        if (responseJson.articles) {
            setHomeNews(responseJson.articles)
        }
        console.log(responseJson)
    }
    return (
        <View>
        <Category navigation={props.navigation} />
        <Trendingnews navigation={props.navigation} />
        <View style={{alignItems: 'center'}}>
            {homeNews.length === 0 ? (
                <View
                style={{
                width: deviceWidth,
                alignItems: 'center',
                justifyContent: 'center',
                }}>
                <ActivityIndicator color="black" size="large" />
                </View>
                ) : (
                    <ScrollView showsVerticalScrollIndicator={false}>
                    {homeNews.map((news, index) =>
                        news.urlToImage ? (
                        <TouchableOpacity
                            key={index}
                            onPress={() =>
                            props.navigation.navigate('WebView', {url: news.url})
                            }>
                            <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                backgroundColor: 'white',
                                borderRadius: 10,
                                elevation: 4,
                                width: deviceWidth - 30,
                                marginVertical: 7,
                            }}>
                            <Image
                                source={{uri: `${news.urlToImage}`}}
                                style={{height: 100, width: 100, borderRadius: 10}}
                            />
                            <Text
                                style={{
                                width: deviceWidth - 130,
                                paddingLeft: 10,
                                paddingTop: 5,
                                }}>
                                {news.title}
                            </Text>
                            </View>
                        </TouchableOpacity>
                        ) : null,
                    )}
                    </ScrollView>
                )}
                </View>
        </View>
    )
}

export default Home