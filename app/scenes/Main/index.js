/**
 * Created by ijoy on 16-6-28.
 */
import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ListView,
    ScrollView,
    Dimensions
}from 'react-native'

export default class Main extends React.Component{
    render(){
         return(
            <View>
                <View>
                    <View style={styles.showTip}>
                        <Text style={{fontSize:18}}>系统运行正常</Text>
                    </View>
                    <View style={styles.ACRunPiecontainer}>
                        <Text>AC运行正常的所占的比例扇形</Text>
                    </View>
                    <View style={styles.ACConnectBarcontainer}>
                        <Text>AC连接AP,wifi,电脑的条形图</Text>
                    </View>
                </View>
            </View>
         )
    }
}

const styles=StyleSheet.create({
    showTip:{
        height:30,
        marginBottom:10,
        justifyContent:'center',
        alignItems:'center',

    },
    ACRunPiecontainer:{
        backgroundColor:'red',
        height:100,
        margin:5
    },
    ACConnectBarcontainer:{
        backgroundColor:'blue',
        height:120,
        margin:20,
    },

});