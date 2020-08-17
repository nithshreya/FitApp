import React from "react";
import { StyleSheet, View, Text } from "react-native";

function HippoChat(props) {
  return (
    <View style={styles.background}>
      <Text style={styles.desc}>Find your fitness routine</Text>
    </View>
  );
}

const styles = {
  background: {
    flex: 1,
    alignItems: "center",
    color: "white",
  },
  desc: {
    // width: "80%",
    // backgroundColor: "grey",
    fontWeight: "bold",
    top: "25%",
    fontSize: 30,
  },
};

export default HippoChat;
