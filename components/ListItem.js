import React from 'react';
import {View, Text,StyleSheet,TouchableOpacity} from 'react-native';
const ListItem = props =>{
 return(
     
     <TouchableOpacity activeOpacity={0.5} onPress={props.onDelete.bind(this,props.id)}>
    <View  style={styles.listItems} >
    <Text >{props.title}</Text>
    </View> 
    </TouchableOpacity>
 
 )
};
const styles = StyleSheet.create({
    listItems:{
        padding:10,
        borderColor:'black',
        backgroundColor:'#ccc',
        borderStyle:"dotted", 
        marginVertical:10,
         
      }
})
export default ListItem;