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
} from 'react-native'
const serverInfoArray=[{title:'二月维修',name:'王大超',manager:'张宏',company:'上海宏信有限公司'},{title:'三月维修',name:'王大超',manager:'张宏',company:'上海宏信有限公司'},{title:'四月维修',name:'王大超',manager:'张宏',company:'上海宏信有限公司'}];
export default class ShowAc extends  React.Component{
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
          </View>
        );
    }
    render(){
        return(
          <View>
                <View style={styles.basic}>
                        <Text style={styles.title}>PGM EX2200</Text>
                        <View style={styles.labelInfo}>
                            <Text>PGM EX2200只占用1个机架单元，适合于空间和电力都十分宝贵的拥挤配线间和接入地点。PGM EX2200包括24和48个10/100/1000BASE-T端口两种型号，10英寸深，功耗低，其低噪音风扇使其成为开放式办公环境部署的环保解决方案。每台 PGM EX2200 交换机在前面板上有 4 个固定的千兆以太网上行链路端口，支持配线间或上游汇聚交换机之间的高速主干连接或链路汇聚连接，而不会对基本端口造成影响，提供了真正的 24+4 和 48+4 配置选项</Text>
                        </View>
                </View>
                <View style={styles.chartRow}>
                        <View style={styles.chart}>
                            <Text>cpu 图表</Text>
                        </View>
                    <View style={styles.chart}>
                        <Text>网络传输 图表</Text>
                    </View>
                    <View style={styles.chart}>
                        <Text>本地存储 图表</Text>
                    </View>
                </View>
              <View style={styles.serviceInfo}>
                    <Text style={styles.title}>设备由上海信利设备公司提供你好</Text>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this._renderServerRow}
                    />
              </View>
          </View>
        );
    }
}

const styles=StyleSheet.create({
    title:{
        fontSize:18,
        color:'yellow'
    },
    labelInfo:{
        marginTop:10,
    },
    basic:{
        backgroundColor:'gray',
        margin:10,
    },
    chartRow:{
        flex:1,
        justifyContent:'center',
      flexDirection:'row',
        margin:5,
    },
    chart:{
        margin:5,
        backgroundColor:'green',
        width:(Dimensions.get('window').width-40)/3,
        height:90
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
