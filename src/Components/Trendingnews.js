import { View, Text, ActivityIndicator, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

const Trendingnews = () => {

    const [trendingNews,setTrendingNews] =useState([])

    useEffect(()=>{
        fetchNewsData()
    }, [])

    const fetchNewsData =async()=>{
        let apiurl=`https://newsapi.org/v2/top-headlines?country=in&apiKey=a6032d9eb72842d38085288bb97e6740`
        let response=await fetch(apiurl);
        let responseJson= await response.json();
        if (responseJson.articles) {
            setTrendingNews(responseJson.articles)
        }
        console.log(responseJson)
    }

    return (
        <View>
            {trendingNews.length === 0 ? (
            <ActivityIndicator color="black" size="large" />
            ) : (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {trendingNews.map((news, index) => (
                    <TouchableOpacity
                    key={index}
                    onPress={()=> navigation.navigate('WebView', {url: news.url})
                    }>
                <View style={{margin: 10}}>
                    <Image
                    source={{uri: `${news.urlToImage}`}}
                    style={{height: 200, width: 200, borderRadius: 10}}
                    />
                    <Text style={{width: 200, textAlign: 'justify'}}>
                    {news.title}
                    </Text>
                </View>
                </TouchableOpacity>
                ))}
            </ScrollView>
            )}
        </View>
    )
}

export default Trendingnews