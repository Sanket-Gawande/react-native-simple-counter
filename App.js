import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-web";

export default function App() {
  const [Count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{Count}</Text>
      <StatusBar style="auto" />

      <TouchableOpacity>
        <Text style={styles.button} onPress={() => setCount(Count + 10)}>
          +10
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.button} onPress={() => setCount(0)}>
          Reset
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={styles.button}
          onPress={() => setCount(Count ? Count - 10 : 0)}
        >
          -10
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "space-around",
    height: "400px",
    alignItems: "center",
    marginVertical: "auto",
  },
  button: {
    width: 250,
    textAlign: "center",
    paddingVertical: 15,
    backgroundColor: "#009578",
    fontWeight: "bold",
    color: "#fff",
  },
  counter: {
    fontSize: 40,
    fontWeight: "500",
    marginVertical: 20,
  },
});
