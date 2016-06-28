/**
 * Created by ijoy on 16-6-28.
 */
import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
}from 'react-native'
import { Avatar, Drawer, Divider, COLOR, TYPO } from 'react-native-material-design';
export default class Navigation extends React.Component{
    constructor(){
        super();
        this.state={
            route:null,
        }
    }
    changeScene(path,name){
        const {drawer,navigator}=this.context;
        this.setState({
            route:path
        });
        navigator.to(path,name);
        drawer.closeDrawer();
    }
    render(){
        const {route}=this.state;
        return(
            <Drawer theme='light'>
                <Drawer.Header image={<Image source={require('../../img/nav.jpg')} />}>
                    <View style={styles.header}>
                        <Avatar size={80} image={<Image source={require('../../img/timg.jpg')}/>} />
                        <Text style={[styles.text, COLOR.paperGrey50, TYPO.paperFontSubhead]}>李振纲</Text>
                    </View>
                </Drawer.Header>

                <Drawer.Section
                    items={[{
                        icon: 'home',
                        value: 'Welcome',
                        active: !route || route === 'Main',
                        onPress: () => this.changeScene('Main'),
                        onLongPress: () => this.changeScene('Main')
                    }]}
                />

                <Drawer.Section
                    title="功能区"
                    items={[{
                        icon: 'face',
                        value: 'Ac管理',
                        label: '12',
                        active: route === 'Ac',
                        onPress: () => this.changeScene('Ac'),
                        onLongPress: () => this.changeScene('Ac')
                    }, {
                        icon: 'label',
                        value: 'Buttons',
                        active: route === 'buttons',
                        label: '8',
                        onPress: () => this.changeScene('buttons'),
                        onLongPress: () => this.changeScene('buttons')
                    }, {
                        icon: 'check-box',
                        value: 'Checkboxes',
                        label: '10',
                        active: route === 'checkboxes',
                        onPress: () => this.changeScene('checkboxes'),
                        onLongPress: () => this.changeScene('checkboxes')
                    }, {
                        icon: 'label',
                        value: 'Dividers',
                        label: '10',
                        active: route === 'dividers',
                        onPress: () => this.changeScene('dividers'),
                        onLongPress: () => this.changeScene('dividers')
                    }, {
                        icon: 'label',
                        value: 'Icon Toggles',
                        label: 'NEW',
                        active: route === 'icon-toggles',
                        onPress: () => this.changeScene('icon-toggles'),
                        onLongPress: () => this.changeScene('icon-toggles')
                    }, {
                        icon: 'radio-button-checked',
                        value: 'Radio Buttons',
                        label: '8',
                        active: route === 'radio-buttons',
                        onPress: () => this.changeScene('radio-buttons'),
                        onLongPress: () => this.changeScene('radio-buttons')
                    },
                     //{
                     //   icon: 'list',
                     //   value: 'List',
                     //   label: 'NEW',
                     //   active: route === 'list',
                     //   onPress: () => this.changeScene('list'),
                     //   onLongPress: () => this.changeScene('list')
                     //},
                    {
                        icon: 'label',
                        value: 'Subheaders',
                        label: '4',
                        active: route === 'subheaders',
                        onPress: () => this.changeScene('subheaders'),
                        onLongPress: () => this.changeScene('subheaders')
                    }]}
                />
                <Divider style={{ marginTop: 8 }} />
                <Drawer.Section
                    title="Config"
                    items={[{
                        icon: 'invert-colors',
                        value: 'Change Theme',
                        label: '24',
                        active: route === 'themes',
                        onPress: () => this.changeScene('themes'),
                        onLongPress: () => this.changeScene('themes')
                    }]}
                />

                </Drawer>
        );
    }
}
Navigation.contextTypes={
    drawer:React.PropTypes.object.isRequired,
    navigator:React.PropTypes.object.isRequired
}

const styles =StyleSheet.create( {
    header: {
        paddingTop: 16
    },
    text: {
        marginTop: 20,
        marginLeft:20,
    }
});