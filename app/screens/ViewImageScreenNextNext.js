import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";

function ViewImageScreenNextNext(props) {
  const handlePress = () => {
    console.log("text pressed");
  };
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/knowit.jpg")}
    >
      {/* <View style={styles.nextButton}></View>
      <View style={styles.skipButton}></View> */}
      <View style={styles.des}>
        <Text style={styles.des1}>Get your workout plan</Text>
        <Text style={styles.des2}>
          Know your workout plan and get healthy, fit and in shape
        </Text>
      </View>
      <Text style={styles.skipButton} onPress={handlePress}>
        Skip
      </Text>
      <Text style={styles.nextButton} onPress={handlePress}>
        Next
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  nextButton: {
    paddingRight: 30,
    paddingBottom: 15,
    // backgroundColor: "darkgrey",
    fontSize: 25,
  },
  skipButton: {
    // backgroundColor: "grey",
    alignItems: "flex-end",
    fontSize: 25,
    position: "absolute",
    paddingRight: 30,
    top: 70,
  },
  des: {
    width: "100%",
    // backgroundColor: "grey",
    alignItems: "center",
    bottom: "15%",
  },
  des1: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  des2: {
    fontSize: 20,
  },
});

export default ViewImageScreenNextNext;
