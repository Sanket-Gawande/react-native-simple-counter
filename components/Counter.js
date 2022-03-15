import React from "react";
import { Button, TouchableHighlight } from "react-native";

const Counter = () => {
  return (
    <View>
      <text style={styles.counter}>10</text>
      <TouchableHighlight>
        <Button>+10</Button>
      </TouchableHighlight>
      <TouchableHighlight>
        <Button>Reset</Button>
      </TouchableHighlight>
      <TouchableHighlight>
        <Button>-10</Button>
      </TouchableHighlight>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  counter: {
    fontSize: 15,
    color: "orange",
    marginVertical: 20,
  },
});
