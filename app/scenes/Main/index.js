/**
 * Created by ijoy on 16-6-28.
 */
/*
*/
import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ListView,
    ScrollView,
    Dimensions,
    DeviceEventEmitter
}from 'react-native'
import BarChart from '../../components/BarChart'
import PieChart from '../../components/PieChart'






export default class Main extends React.Component{
    getPieData(){
        let data={
            xValues:['正常','警告','错误'],
            yValues:[{data:[17,2,1],label:'',config:{colors:['green','yellow','red']}}]
        };
        return data;
    }
    getBarData(){
        let data={
            xValues:['1月','2月','3月'],
            yValues:[
                {
                    data:[200,300,400],
                    label:'ap',
                    config:{
                        color:'blue'
                    }
                },
                {
                    data:[2000,3000,4000],
                    label:'wifi',
                    config:{
                        color:'red'
                    }
                },
                {
                    data:[400,500,600],
                    label:'pc',
                    config:{
                        color:'yellow'
                    }
                }
            ]
        };
        return data;
    }

    render(){
         return(
            <View>
                <View>
                    <View style={styles.showTip}>
                        <Text style={{fontSize:18}}>系统运行正常</Text>
                    </View>
                    <View style={styles.ACRunPiecontainer}>
                        <View style={styles.chartPanel}>
                        <Text style={{fontSize:20,marginBottom:10,textAlign:'center', backgroundColor:'gray',}}>AC运行状态的环形图</Text>

                            <PieChart style={{flex: 1}}
                                      holeRadius={68}
                                      description={""}
                                      yAxis={{drawGridLines: false}}
                                      legend={{enable: false}}
                                      yAxisRight={{enable: false}}
                                      data={this.getPieData()}
                            />
                        </View>
                    </View>
                    <View style={styles.ACConnectBarcontainer}>
                        <View style={styles.chartPanel}>
                            <Text style={{fontSize:20,marginBottom:10,textAlign:'center', backgroundColor:'gray',}}>AC连接AP,wifi,Pc的条形图</Text>

                        <BarChart style={{flex:1}} data={this.getBarData()}/>
                        </View>
                    </View>
                </View>

            </View>
         )
    }
}

const styles=StyleSheet.create({
    showTip:{
        height:30,
        marginBottom:10,
        justifyContent:'center',
        alignItems:'center',

    },
    chartPanel:{
        flex:1,

        borderWidth:1,
    },
    barTitle:{
        justifyContent:'center',
        height:20,
        backgroundColor:'green',

    },
    ACRunPiecontainer:{
        height:200,
        margin:5,
        marginBottom:20,
    },
    ACConnectBarcontainer:{
        height:200,
        margin:5,
    },

});