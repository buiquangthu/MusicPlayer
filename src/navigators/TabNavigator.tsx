import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { ReactNode } from "react";
import HomeNavigator from "./HomeNavigator";
import ExploreNavigator from "./ExploreNavigator";
import LibraryNavigator from "./LibraryNavigator";
import { appColors } from "../constants/appColors";
import Icon from "react-native-vector-icons/AntDesign";
import { CustomText } from "../components";



const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabel({ focused }) {
          return (
            <CustomText
              text={route.name}
              size={11}
              color={focused ? appColors.turquoise : appColors.gray}
            />
          )
        },
        tabBarStyle: {
          backgroundColor: appColors.background,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center'

        },

        tabBarIcon: ({ focused, color, size }) => {
          let icon: ReactNode;
          color = focused ? appColors.turquoise : appColors.gray
          switch (route.name) {
            case 'Home':
              icon = <Icon name="home" size={size} color={color} />
              break;
            case 'Explore':
              icon = <Icon name="search1" size={size} color={color} />
              break;
            case 'Library':
              icon = <Icon name="folder1" size={size} color={color} />
              break;
          }
          return icon;
        }
      })}
    >
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Explore" component={ExploreNavigator} />
      <Tab.Screen name="Library" component={LibraryNavigator} />
    </Tab.Navigator>
  )
};

export default TabNavigator;
