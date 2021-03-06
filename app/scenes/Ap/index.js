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
var VCArrays=[{name:"DB5318",type:'error',company:'成都维远艾钰信息技术有限公司'},{name:"DB5318",type:'warning',company:'成都维远艾钰信息技术有限公司'},{name:"DB5318",type:'warning',company:'成都维远艾钰信息技术有限公司'},{name:"DB5318",company:'成都维远艾钰信息技术有限公司'},{name:"DB5318",company:'成都维远艾钰信息技术有限公司'},{name:"DB5318",company:'成都维远艾钰信息技术有限公司'}];

export default class ListAp extends  React.Component{
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
        return type? <Icon name={type} size={40} color={type==='error'?'#D50000':'#FFFF00'}/>:null;
    }
    _renderRowView(item){
        return(
            <TouchableNativeFeedback onPress={()=>this.changeScene()}>
                <View style={{ flexDirection:'row',height:80,margin:5,backgroundColor:'gray',borderWidth:0.5}}>
                    <View style={{flex:1}}>
                        <Text style={{fontSize:20,color:'blue',marginBottom:5}}>{item.name}</Text>
                        <Text><Text style={{fontWeight:'bold'}}>运行时间</Text>：<Text style={{color:'yellow',fontSize:18}}>200</Text>天</Text>
                        <Text><Text style={{fontWeight:'bold'}}>生产厂家</Text>：{item.company}</Text>
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

        navigator.to('Ap.ShowAp');
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
ListAp.contextTypes={
    navigator:React.PropTypes.object.isRequired,
    drawer:React.PropTypes.object.isRequired,
}
