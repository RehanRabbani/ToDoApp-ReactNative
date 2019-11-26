import React, { useState } from "react";
import { TextInput, Button, View, StyleSheet, Modal } from "react-native";
const TextInputs = props => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.addhanndler(enteredGoal);
    setEnteredGoal(" ");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.InputCOntainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.Input}
          onChangeText={goalInputHandler}
        />
        <View style={styles.parentButton}>
        <View style={styles.button}>
        <Button title="Cancle" color="red" onPress={props.onCancleMode} />
        </View>
        <View style={styles.button}>
        <Button title="ADD" onPress={addGoalHandler} />
        </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  InputCOntainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  Input: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: "80%"
  },
  parentButton:{
    flexDirection:'row',
    justifyContent:'space-around',
    width:'60%',
  },
  button:{
    width:'40%',
  }
});
export default TextInputs;
