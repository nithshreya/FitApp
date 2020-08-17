import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import { Actions } from "react-native-router-flux";

function ViewImageScreenNextNext(props) {
  const handleNext = () => {
    Actions.hippoChat();
    console.log("next");
  };
  const handleSkip = () => {
    Actions.hippoChat();
    console.log("skipped");
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
      <Text style={styles.skipButton} onPress={handleSkip}>
        Skip
      </Text>
      <Text style={styles.nextButton} onPress={handleNext}>
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
    resizeMode: "cover",
  },
  nextButton: {
    paddingRight: 30,
    paddingBottom: 15,
    // backgroundColor: "darkgrey",
    fontSize: 25,
    color: "white",
  },
  skipButton: {
    // backgroundColor: "grey",
    alignItems: "flex-end",
    fontSize: 25,
    position: "absolute",
    paddingRight: 30,
    top: 70,
    color: "white",
  },
  des: {
    width: "100%",
    // backgroundColor: "grey",
    alignItems: "center",
    bottom: "15%",
  },
  des1: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
  },
  des2: {
    fontSize: 20,
    color: "white",
  },
});

export default ViewImageScreenNextNext;
