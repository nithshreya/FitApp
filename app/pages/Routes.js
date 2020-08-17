import React from "react";
import { Router, Stack, Scene } from "react-native-router-flux";

// import Home from './Home.js'
// import About from './About.js'

import ViewImageScreen from "../screens/ViewImageScreen";
import ViewImageScreenNext from "../screens/ViewImageScreenNext";
import ViewImageScreenNextNext from "../screens/ViewImageScreenNextNext";
import HippoChat from "../screens/HippoChat";

function Routes() {
  return (
    <Router>
      <Stack key="root" hideNavBar={true}>
        <Scene
          key="viewImageScreen"
          component={ViewImageScreen}
          title="ViewImageScreen"
          initial={true}
        />
        <Scene
          key="viewImageScreenNext"
          component={ViewImageScreenNext}
          title="ViewImageScreenNext"
        />
        <Scene
          key="viewImageScreenNextNext"
          component={ViewImageScreenNextNext}
          title="ViewImageScreenNextNext"
        />
        <Scene
          key="hippoChat"
          component={HippoChat}
          title="HippoChat"
        />
      </Stack>
    </Router>
  );
}

export default Routes;
