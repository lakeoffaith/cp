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
import GiftedListView from 'react-native-gifted-listview'
import {Icon} from 'react-native-material-design'
var VCArrays=[{name:"TLAC100",type:'error'},{name:"TLAC100",type:'warning'},{name:"TLAC100",type:'warning'},{name:"TLAC100"},{name:"TLAC100"},{name:"TLAC100"},{name:"TLAC100"}];
export default class ListAc extends  React.Component{
    /**
     * Will be called when refreshing
     * Should be replaced by your own logic
     * @param {number} page Requested page to fetch
     * @param {function} callback Should pass the rows
     * @param {object} options Inform if first load
     */
    _onFetch(page = 1, callback, options) {
        setTimeout(() => {
            var rows = VCArrays;
            if (page === 3) {
                callback(rows, {
                    allLoaded: true, // the end of the list is reached
                });
            } else {
                callback(rows);
            }
        }, 200); // simulating network fetching
    }


    /**
     * When a row is touched
     * @param {object} rowData Row data
     */
    _onPress(rowData) {
        console.log(rowData+' pressed');
    }
    _renderIcon(type){
        return type?<Icon name={type} size={40} color={type==='error'?'#D50000':'#FFFF00'}/>:null;
    }
    _renderRowView(item){
        return(
            <TouchableNativeFeedback onPress={()=>this.changeScene()}>
                <View style={{ flexDirection:'row',height:80,margin:5,backgroundColor:'gray',borderWidth:0.5}}>
                    <View style={{flex:1}}>
                        <Text style={{fontSize:20,color:'blue',marginBottom:5}}>{item.name}</Text>
                            <Text><Text style={{fontWeight:'bold'}}>运行时间</Text>：<Text style={{color:'yellow',fontSize:18}}>400</Text>天</Text>
                            <Text><Text style={{fontWeight:'bold'}}>生产厂家</Text>：成都维远艾钰信息技术有限公司</Text>
                        </View>
                    <View style={{width:60,justifyContent:'center',alignItems:'center'}}>
                        {this._renderIcon(item.type)}

                        </View>

                </View>
            </TouchableNativeFeedback>
        );
    }
    changeScene(){
        const {drawer,navigator}=this.context;

        navigator.to('Ac.ShowAc');
        drawer.closeDrawer();
    }
    render(){
        return(
            <View>
                <View style={{height:Dimensions.get('window').height-90}}>
                    <GiftedListView
                        rowView={this._renderRowView.bind(this)}
                        onFetch={this._onFetch}
                        firstLoader={true} // display a loader for the first fetching
                        pagination={true} // enable infinite scrolling using touch to load more
                        refreshable={true} // enable pull-to-refresh for iOS and touch-to-refresh for Android
                        withSections={false} // enable sections
                        customStyles={{
            paginationView: {
              backgroundColor: '#eee',
            },
          }}

                        refreshableTintColor="blue"
                    />
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
        flexDirection:'row',
        height:80,
        margin:5,
        backgroundColor:'gray',
        borderWidth:0.5
    }
});