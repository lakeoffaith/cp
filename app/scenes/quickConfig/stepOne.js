/**
 * Created by ijoy on 16-6-27.
 */
import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight
} from 'react-native'

import t from 'tcomb-form-native'
const Form = t.form.Form;
const BroadConfig=t.struct({
    name:t.String,
    ip:t.String,
    password:t.String,
});
const options={};
export  default class StepOne extends  React.Component{
    nextStep(){
        let {navigator}=this.context;
        navigator.forward();
    }
    render(){
        return (
            <View>
                <Text>宽带连接配置</Text>
                <View>
                    <Form
                        ref="form"
                        type={BroadConfig}
                        options={options}
                    />
                    <TouchableHighlight style={styles.button} underlayColor='#99d9f4' onPress={()=>this.nextStep()}>
                        <Text style={styles.buttonText}>下一步</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
StepOne.contextTypes={
    navigator:React.PropTypes.object.isRequired,
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