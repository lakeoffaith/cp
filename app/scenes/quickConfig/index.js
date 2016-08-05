/**
 * Created by ijoy on 16-7-5.
 */

import React from 'react'

import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    TextInput
} from 'react-native'
import { Button } from 'react-native-material-design';
export default class QuickConfig extends React.Component{
    static contextTypes={
        navigator:React.PropTypes.object.isRequired,
        drawer:React.PropTypes.object.isRequired,
    }
    nextStep(){
        let {navigator,drawer} =this.context;
        navigator.forward();
    }
    render(){
        return(
          <View>
              <View style={{flexDirection:'row',height:90,marginBottom:20,alignItems:'center',justifyContent:'center'}}><Text style={{fontWeight:'bold',fontSize:25}}>配置AC的IP</Text></View>
              <TextInput
                  style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              />
              <Button value="完成连接" raised={true} theme="dark" onPress={()=>this.nextStep()} />
          </View>
        );
    }
}