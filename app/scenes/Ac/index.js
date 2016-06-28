/**
 * Created by ijoy on 16-6-28.
 */
/**
 * Created by ijoy on 16-6-24.
 */
import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableNativeFeedback,
    ScrollView,
    Dimensions,
} from 'react-native'
var VCArrays=[{name:"护士107AC",color:'green'},{name:"护士107AC",color:'green'},{name:"护士107AC",color:'green'},{name:"护士107AC",color:'green'},{name:"护士107AC",color:'green'},{name:"护士107AC",color:'green'},{name:"护士107AC",color:'green'},{name:"护士107AC",color:'green'},{name:"护士107AC",color:'green'},{name:"检验207AC",color:'green'},{name:"ICU707AC",color:'green'},{name:"住院901AC",color:'green'},{name:"急诊304AC",color:'green'}];
export default class ListAc extends  React.Component{
    createRow(item,i){
        return(
            <TouchableNativeFeedback onPress={()=>this.changeScene()}>
                <View style={styles.item}>
                    <Text>{item.name}</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
    changeScene(){
        const {drawer,navigator}=this.context;

        navigator.forward();
        drawer.closeDrawer();
    }
    render(){
        return(
            <View>
                <View style={{height:Dimensions.get('window').height}}>
                    <ScrollView
                        scrollEventThrottle={200}
                        style={styles.scrollView} navigator={this.props.navigator}>
                        {VCArrays.map(this.createRow.bind(this))}

                    </ScrollView>
                </View>


            </View>
        );
    }
}

ListAc.contextTypes={
    navigator:React.PropTypes.object.isRequired,
    drawer:React.PropTypes.object.isRequired,
}
const styles=StyleSheet.create({
    item:{
        height:60,
        margin:5,
        backgroundColor:'red',
    }
});