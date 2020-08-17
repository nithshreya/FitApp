import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import { Actions } from "react-native-router-flux";

function ViewImageScreen(props) {
  const handleNext = () => {
    Actions.viewImageScreenNext();
    console.log("next");
  };
  const handleSkip = () => {
    Actions.hippoChat();
    console.log("Skipped");
  };
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      {/* <View style={styles.nextButton}></View>
      <View style={styles.skipButton}></View> */}
      <View style={styles.des}>
        <Text style={styles.des1}>Stay Fit</Text>
        <Text style={styles.des2}>30 days plan to stay fit</Text>
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
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  nextButton: {
    // backgroundColor: "darkgrey",
    paddingRight: 30,
    fontSize: 25,
    color: "white",
  },
  skipButton: {
    alignItems: "flex-end",
    fontSize: 25,
    paddingRight: 30,
    position: "absolute",
    top: 70,
    color: "white",
  },
  des: {
    width: "100%",
    // backgroundColor: "grey",
    alignItems: "center",
    bottom: "20%",
  },
  des1: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  des2: {
    fontSize: 20,
    color: "white",
  },
});

export default ViewImageScreen;
