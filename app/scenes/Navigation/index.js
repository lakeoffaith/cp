/**
 * Created by ijoy on 16-6-28.
 */
import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
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
            <View style={{flex:1}}>
            <Drawer theme='light'>
                <Drawer.Header image={<Image source={require('../../img/nav.jpg')} />}>
                    <View style={styles.header}>
                        <Avatar size={80} image={<Image source={require('../../img/timg.jpg')}/>} />
                        <Text style={[styles.text, COLOR.paperGrey50, TYPO.paperFontSubhead]}>李振纲</Text>
                    </View>
                </Drawer.Header>



                <Drawer.Section
                    items={[
                    {
                        icon: 'home',
                        value: 'Welcome',
                        active: !route || route === 'Main',
                        onPress: () => this.changeScene('Main'),
                        onLongPress: () => this.changeScene('Main')
                    },{
                        icon: 'face',
                        value: 'AC管理',
                        label: '12',
                        active: route === 'Ac',
                        onPress: () => this.changeScene('Ac'),
                        onLongPress: () => this.changeScene('Ac')
                    }, {
                        icon: 'label',
                        value: 'AP管理',

                        active: route === 'Ap',
                        label: '8',
                        onPress: () => this.changeScene('Ap'),
                        onLongPress: () => this.changeScene('Ap')
                    }, {
                        icon: 'check-box',
                        value: '快速配置',
                        label: '10',
                        active: route === 'QuickConfig',
                        onPress: () => this.changeScene('QuickConfig'),
                        onLongPress: () => this.changeScene('QuickConfig')
                    }, {
                        icon: 'label',
                        value: '详细配置',
                        label: '10',
                        active: route === 'DetailConfig',
                        onPress: () => this.changeScene('DetailConfig'),
                        onLongPress: () => this.changeScene('DetailConfig')
                    }, {
                        icon: 'label',
                        value: '安全检测',
                        label: '2',
                        active: route === 'Security',
                        onPress: () => this.changeScene('Security'),
                        onLongPress: () => this.changeScene('Security')
                    }, {
                        icon: 'label',
                        value: '个人中心',
                        label: '2',
                        active: route === 'UserCenter',
                        onPress: () => this.changeScene('UserCenter'),
                        onLongPress: () => this.changeScene('UserCenter')
                    }, {
                        icon: 'label',
                        value: '系统设置',
                        label: '2',
                        active: route === 'Setting',
                        onPress: () => this.changeScene('Setting'),
                        onLongPress: () => this.changeScene('Setting')
                    }
                     //{
                     //   icon: 'list',
                     //   value: 'List',
                     //   label: 'NEW',
                     //   active: route === 'list',
                     //   onPress: () => this.changeScene('list'),
                     //   onLongPress: () => this.changeScene('list')
                     //},
                    ]}
                />


                </Drawer>
                <View style={{marginBottom:0,flexDirection:'row',height:40}}>

                    <View  style={{flex:1,backgroundColor:'blue',alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity  onPress={()=>this.changeScene('Login')}>
                        <Text style={{fontSize:20}}>登录</Text>
                        </TouchableOpacity >
                    </View>

                    <View onPress={()=>this.changeScene('Register')} style={{flex:1,backgroundColor:'green',alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity  onPress={()=>this.changeScene('Register')}>
                            <Text style={{fontSize:20}}>注册</Text>
                        </TouchableOpacity >
                    </View>
                    </View>
                </View>
        );
    }
}
Navigation.contextTypes={
    drawer:React.PropTypes.object.isRequired,
    navigator:React.PropTypes.object
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