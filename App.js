import React ,{useState} from 'react';
import { StyleSheet, Text, View ,TextInput,Button,FlatList} from 'react-native';
import ListItem from './components/ListItem.js';
import TextInputs from './components/TextInput'
export default function App() {
 
  const [courseGoals,setCourseGoals]=useState([]);
  const [addMode , setAddMode]=useState(false)
  const addGoalhandler =goalTitle=>{
   setCourseGoals(currentGoals => 
    [...currentGoals,{key:Math.random().toString(),value:goalTitle}]);

    setAddMode(false);
  }
  const deleteItem = goalId =>{
    setCourseGoals(currentGoals =>{
      return currentGoals.filter((goal) => goal.key !== goalId);
    })
  }
  const cancelMode = ()=>{
    setAddMode(false);
  }
  
  return (
    <View style={styles.screen}>
      <Button title="ADD MODEL" onPress={ ()=>setAddMode(true) }/>
      <TextInputs visible={addMode} addhanndler={addGoalhandler} onCancleMode ={cancelMode}/>
      <FlatList
      keyExtractor={(item,index) =>item.key}
       data={courseGoals}
       renderItem={itemData =>( 
       <ListItem id={itemData.item.key} onDelete={deleteItem} title={itemData.item.value}/>
       )}
      />
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:50,
    backgroundColor:'red'
  },
  
 
});
