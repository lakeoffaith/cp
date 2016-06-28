/**
 * Created by ijoy on 16-6-28.
 */
import React from 'react'
import {
    View,
    Text
}from 'react-native'

import {Toolbar as MaterialToolbar} from 'react-native-material-design'
export default class Toolbar extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <MaterialToolbar
                title='welcome'
                icon='menu'
                onIconPress={()=>this.props.onIconPress()}
                actions={[{
                    icon: 'warning',
                }]}
                rightIconStyle={{
                    margin: 10
                }}
            />
        );
    }
}