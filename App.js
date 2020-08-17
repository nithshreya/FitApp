import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ViewImageScreenNext from "./app/screens/ViewImageScreenNext";
import HippoChat from "./app/screens/HippoChat";

// import ViewImageScreenNextNext from "./app/screens/ViewImageScreenNextNext";

import Routes from "./app/pages/Routes";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Routes />
      {/* <HippoChat /> */}
      {/* <ViewImageScreen /> */}
      {/* <ViewImageScreenNext />
      <ViewImageScreenNextNext /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
