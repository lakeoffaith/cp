import React from 'react'

import {
    StyleSheet,
    View,
    Text,
    Dimensions
} from 'react-native'
import WanConfig from './WanConfig'
import LanConfig from './LanConfig'
import ScrollableTabView from 'react-native-scrollable-tab-view'
const height=Dimensions.get('window').height-90
/**/
export default class ScrollConfig extends React.Component{
    render(){
        return(
            <View>
                    <View style={{flex:1,height:height}}>
                    <ScrollableTabView
                    >
                        <WanConfig tabLabel="WAN接口配置"/>
                        <LanConfig tabLabel="LAN接口配置"/>
                    </ScrollableTabView>
                        </View>
            </View>
        );
    }
}