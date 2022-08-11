import React from 'react'
import WebView from 'react-native-webview'

const WebViewDetail = (props) => {
    return (
        <WebView source={{ uri: `${props.route.params.url}` }} />
    )
}

export default WebViewDetail