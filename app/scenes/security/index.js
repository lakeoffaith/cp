import React from 'react'
/**/
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
export default class Security extends React.Component{
    constructor(){
        super();
        this.state={
            fill:30,
            isPressed:false
        }
    }
    _onPress(){
        this.refs.circularProgress.performLinearAnimation(80,3000);
        this.setState({fill:80,isPressed:true});
    }
    render(){
        return(
          <View>
              <View style={styles.chart}>
                  <AnimatedCircularProgress
                      ref="circularProgress"
                      size={200}
                      width={15}
                      fill={this.state.fill}
                      tintColor="#00e0ff"
                      backgroundColor="#3d5875">
                      {
                          (fill) => (
                              <Text style={styles.points}>
                                  { this.state.fill }分
                              </Text>
                          )
                      }
                  </AnimatedCircularProgress>
              </View>
              <View style={styles.container}>
                  <TouchableHighlight style={styles.btn} underlayColor="yellow" onPress={this._onPress.bind(this)}>
                      <Text style={styles.btnText}>安全检测</Text>
                  </TouchableHighlight>
                  </View>
              <View style={styles.scanlog}>
                  {this.state.isPressed?
                      <View>
                      <Text>ssl验证..</Text>
                      <Text>病毒防护..</Text>
                      <Text>木马检测..</Text>
                      <Text>异常流量监控..</Text>
                      <Text>软件更新升级..</Text>
                  </View>
                      :null}

              </View>
          </View>
        );
    }
}

const styles=StyleSheet.create({
    points:{
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 72,
        left: 50,
        width: 120,
        color: '#7591af',
        fontSize: 50,
        fontWeight: "100"
    },
    container:{
        flex:1,
        height:60,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    btn:{
      backgroundColor:'green',
        width:100,
        height:50,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
    },
    btnText:{
        fontSize:18,

    },
    chart:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
        height:200,
    },
    scanlog:{
        margin:10,
        height:200,
        backgroundColor:'green',
        width:Dimensions.get('window').width-20,
    }
});