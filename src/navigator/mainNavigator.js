import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import UserProfile220732Navigator from '../features/UserProfile220732/navigator';
import Maps220713Navigator from '../features/Maps220713/navigator';
import Settings220691Navigator from '../features/Settings220691/navigator';
import Settings220676Navigator from '../features/Settings220676/navigator';
import NotificationList220675Navigator from '../features/NotificationList220675/navigator';
import Maps220674Navigator from '../features/Maps220674/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
UserProfile220732: { screen: UserProfile220732Navigator },
Maps220713: { screen: Maps220713Navigator },
Settings220691: { screen: Settings220691Navigator },
Settings220676: { screen: Settings220676Navigator },
NotificationList220675: { screen: NotificationList220675Navigator },
Maps220674: { screen: Maps220674Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
