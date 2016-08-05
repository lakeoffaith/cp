/**
 * Created by ijoy on 16-6-27.
 */

import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    BackAndroid,
    Dimensions,
    ListView,
    ScrollView,
    Linking
} from 'react-native'
const height=Dimensions.get('window').height-90
import LineChart from '../../components/LineChart'
import {Icon} from 'react-native-material-design'
const serverInfoArray=[{title:'二月维修',name:'王大超',manager:'张宏',company:'成都维远艾钰信息技术有限公司'},{title:'三月维修',name:'王大超',manager:'张宏',company:'成都维远艾钰信息技术有限公司'}];
export default class ShowAc extends  React.Component{
    getCPULineData() {
        var data={
            xValues:['','','','','',''],
            yValues:[
                {
                    data:[1.0,20.0,1.0,0.5,1.0,21.0],
                    label:'CPU占用率',
                    config:{
                        color:'blue'
                    }
                }
            ]
        };
        return data;
    }
    getNETLineData() {
        var data={
            xValues:['','','','','',''],
            yValues:[
                {
                    data:[5.0,30.0,5.0,5,5,21.0],
                    label:'网络传输率',
                    config:{
                        color:'yellow'
                    }
                }
            ]
        };
        return data;
    }
    getLocalStorageLineData() {
        var data={
            xValues:['','','','','',''],
            yValues:[
                {
                    data:[21.0,20.0,23.0,24.5,25.0,30.0],
                    label:'本地存储率',
                    config:{
                        color:'red'
                    }
                }
            ]
        };
        return data;
    }
    constructor(){
        super();
        this.state={
            dataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2}).cloneWithRows(serverInfoArray),
        }
    }
    _renderServerRow(item){
        return (
          <View style={styles.serviceInfoItem}>
              <Text>
                  {item.title}
              </Text>
              <Text><Text style={{fontWeight:'bold'}}>院方管理人员</Text>：{item.manager }</Text>
              <Text><Text style={{fontWeight:'bold'}}>施工人员</Text>：{item.name }</Text>
              <Text><Text style={{fontWeight:'bold'}}>合同公司</Text>：{item.company }</Text>

          </View>
        );
    }
    callPhone(){
        Linking.openURL('tel:028-5666789');
    }
    render(){
        return(
          <ScrollView
            style={{flex:1,height:height}}>
                <View style={styles.basic}>
                        <Text style={styles.title}>TLAC100</Text>
                        <Text><Text style={{fontWeight:'bold'}}>安装位置</Text>：机房3001机号位</Text>
                    <Text><Text style={{fontWeight:'bold'}}>提供产商</Text>：成都维远艾钰信息技术有限公司</Text>
                    <View style={{height:50,flexDirection:'row',justifyContent:'center'}}>
                        <View style={{flex:1,justifyContent:'center'}}><Text><Text style={{fontWeight:'bold'}}>维修电话</Text><Text>：028-5666789</Text></Text></View>
                        <View style={{flex:1,justifyContent:'center'}}><Text onPress={this.callPhone}><Icon  name="call" size={40} color="#689F38"/></Text></View>
                    </View>
                        <View style={styles.labelInfo}>
                            <Text>PGM EX2200只占用1个机架单元，适合于空间和电力都十分宝贵的拥挤配线间和接入地点。PGM EX2200包括24和48个10/100/1000BASE-T端口两种型号，10英寸深，功耗低，其低噪音风扇使其成为开放式办公环境部署的环保解决方案。每台 PGM EX2200 交换机在前面板上有 4 个固定的千兆以太网上行链路端口，支持配线间或上游汇聚交换机之间的高速主干连接或链路汇聚连接，而不会对基本端口造成影响，提供了真正的 24+4 和 48+4 配置选项</Text>
                        </View>
                </View>
                <View style={styles.chart}>
                            <Text>cpu 图表</Text>
                    <LineChart style={{flex:1}} data={this.getCPULineData()}/>
                </View>
                <View style={styles.chart}>
                  <Text>网络传输 图表</Text>
                    <LineChart style={{flex:1}} data={this.getNETLineData()}/>
                </View>
                <View style={styles.chart}>
                  <Text>本地存储 图表</Text>
                    <LineChart style={{flex:1}} data={this.getLocalStorageLineData()}/>
                </View>
                  <View style={styles.serviceInfo}>
                        <Text style={styles.title}>设备由成都维远艾钰信息技术有限公司提供</Text>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this._renderServerRow}
                        />
                  </View>
          </ScrollView>
        );
    }
}

const styles=StyleSheet.create({
    title:{
        fontSize:18,
        color:'yellow',
        marginBottom:5
    },
    labelInfo:{
        marginTop:10,
    },
    basic:{
        backgroundColor:'gray',
        margin:10,
    },
    chart:{
        flex:1,
        margin:5,
        backgroundColor:'green',
        height:150
    },
    serviceInfo: {
        marginTop: 10,
        margin: 5,
        backgroundColor: 'red',
        width: Dimensions.get('window').width,
    },
    serviceInfoItem:{
        margin:5,
        backgroundColor:'gray',
    }
});
