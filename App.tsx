import React, { useEffect, useState } from "react"
import { LaunchScreen } from "./src/screens";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigators/AuthNavigator";
import { StatusBar } from "react-native";


const App = () => {
  const [isShowLaunchScreen, setIsShowLaunchScreen] = useState(true)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsShowLaunchScreen(false)
    }, 2000)
    return () => clearTimeout(timeOut)
  })
  return (
    <>
      <StatusBar barStyle={"dark-content"} />
        {isShowLaunchScreen ? <LaunchScreen /> :
          <NavigationContainer>
            <AuthNavigator />
          </NavigationContainer>}
    </>
  )
};
export default App;
