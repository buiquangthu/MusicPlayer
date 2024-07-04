import React, { useEffect, useState } from "react"
import { LaunchScreen } from "./src/screens";
import { NavigationContainer } from "@react-navigation/native";
// import AuthNavigator from "./src/navigators/AuthNavigator";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import AppRouters from "./src/navigators/AppNavigator";


const App = () => {
  const [isShowLaunchScreen, setIsShowLaunchScreen] = useState(true)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsShowLaunchScreen(false)
    }, 2000)
    return () => clearTimeout(timeOut)
  })
  return (
    <Provider store={store}>
      <StatusBar barStyle={"dark-content"} />
      {isShowLaunchScreen ? <LaunchScreen /> :
        <NavigationContainer>
          <AppRouters/>
        </NavigationContainer>}
    </Provider>

  )
};
export default App;
