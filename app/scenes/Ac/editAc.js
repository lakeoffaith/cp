/**
 * Created by ijoy on 16-6-24.
 */
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    BackAndroid,
    TouchableHighlight
} from 'react-native'

import BackToolbar from '../../Component/ToolbarAndroid/BackToolbar';

import DatePicker from 'react-native-datepicker';
import t from 'tcomb-form-native'
const Form=t.form.Form;
const AC=t.struct({
    name:t.String,
    surname: t.maybe(t.String),  // an optional string
    age: t.Number,               // a required number
    rememberMe: t.Boolean
});
const options={}

export default class EditAc extends  React.Component{
    constructor(){
        super();
        this.state={
            date:'2016-05-11'
        }
    }
    componentDidMount() {
        var navigator = this.props.navigator;
        BackAndroid.addEventListener('hardwareBackPress', function() {
            if (navigator && navigator.getCurrentRoutes().length > 1) {
                navigator.pop();
                return true;
            }
            return false;
        });
    }
    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress');
    }

    onPress(){
        let value=this.refs['form'].getValue();
        if(value){
            console.log(value);
        }
    }
    render(){
        return(
            <View>
                <BackToolbar />
                <View style={styles.container}>
                <Form
                    ref="form"
                    type={AC}
                    options={options}
                />
                    <DatePicker
                        style={{width: 200}}
                        date={this.state.date}
                        mode="date"
                        format="YYYY-MM-DD"
                        minDate="2016-05-01"
                        maxDate="2016-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        iconSource={require('../../img/google_calendar.png')}
                        onDateChange={(date) => {this.setState({date: date});}}
                    />
                    <Text style={styles.instructions}>date: {this.state.date}</Text>
                <TouchableHighlight style={styles.button} onPress={this.onPress.bind(this)} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableHighlight>
                    </View>
            </View>
        )
    }
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