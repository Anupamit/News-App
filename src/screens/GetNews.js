import { View, Text, ActivityIndicator, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const GetNews = () => {

    const deviceHeight = Dimensions.get('window').height;
    const deviceWidth = Dimensions.get('window').width;
    
    const [getnews,setGetnews] =useState([])

    useEffect(()=>{
        fetchNewsData()
        props.navigation.setOptions({
            title: props.route.params.category,
        })
    }, [])

    const fetchNewsData =async()=>{
        let apiurl=`https://newsapi.org/v2/top-headlines?category=${props.route.params.category}&country=in&apiKey=?`
        let response=await fetch(apiurl);
        let responseJson= await response.json();
        if (responseJson.articles) {
            setGetnews(responseJson.articles)
        }
        console.log(responseJson)
    }
    return (
        <View style={{alignItems: 'center'}}>
            {getnews.length === 0 ? (
            <ActivityIndicator
                style={{
                height: deviceHeight,
                width: deviceWidth,
                alignItems: 'center',
                justifyContent: 'center',
                }}
                size="large"
                color="black"
            />
            ) : (
            <ScrollView showsVerticalScrollIndicator={false}>
                {getnews.map((news, index) =>
                news.urlToImage ? (
                    <TouchableOpacity
                    key={index}
                    onPress={()=> navigation.navigate('WebView', {url: news.url})
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
    )
}

export default GetNews
