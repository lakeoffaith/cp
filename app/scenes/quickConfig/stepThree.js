/**
 * Created by ijoy on 16-6-27.
 */
import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
} from 'react-native'

import t from 'tcomb-form-native'
const Form = t.form.Form;
const WirelessConfig=t.struct({
    SSID:t.String,
    信道:t.String,
    模式:t.String,
    带宽:t.String,
});
const options={};
export  default class StepThree extends  React.Component{
    goMain(){
        let {navigator,drawer} =this.context;
        navigator.to('Main',null);
    }
    render(){
        return (
            <View>
                <Text>无线路由配置</Text>
                <View>
                    <Form
                        ref="form"
                        type={WirelessConfig}
                        options={options}
                    />
                    <TouchableHighlight style={styles.button} underlayColor='#99d9f4' onPress={()=>this.goMain()}>
                        <Text style={styles.buttonText}>完成配置</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
StepThree.contextTypes={
    navigator:React.PropTypes.object,
    drawer:React.PropTypes.object,
}

var styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 30,
        alignSelf: 'center',
        marginBottom: 30
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
});