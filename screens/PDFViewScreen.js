import React, {useState, useEffect, useCallback} from "react";
import WebView from "react-native-webview";
import { StyleSheet, Dimensions, View } from 'react-native';
import Pdf from 'react-native-pdf';


export const PDFViewScreen = ({navigation, route}) => {

    const path = route.params.path

    // console.log('path to pdf: ', path)

    // const source = {uri:`file:/${path}`}
    const source = {uri:`data:application/pdf;base64,${path.toString()}`}

    // console.log('source', source)

    return (
        <View style={styles.container}>
        <Pdf
            source={source}
            onError={(error) => {
                console.log(error);
            }}
            onPressLink={(uri) => {
                console.log(`Link pressed: ${uri}`);
            }}
            />
        </View>

        // <WebView
        //     source={{ uri: "file://"+ path}}
        //     // source={{ html: '<h1>Hello world</h1>' }}
        //     style={{ flex: 1 }}
        //     originWhitelist={["*"]}
        //     allowFileAccess={true}
        // />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});
