/**
 * Created by ijoy on 16-6-27.
 */
import React from 'react'
import {
    StyleSheet,
    View,
    Text
}from 'react-native'
import t from 'tcomb-form-native'
const Form = t.form.Form;
const wan=t.struct({
    IP地址:t.String,
    子网掩码:t.String,
    网关:t.String,
    DNS服务器1:t.String,
    DNS服务器2:t.String,
});
const options={};

export default class WanConfig extends React.Component{
    render(){
        return(
            <View >
                <Form
                    ref="form"
                    type={wan}
                    options={options}/>
          </View>
        );
    };
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