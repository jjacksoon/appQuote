import React from "react";
import {createStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();
import { Quote } from "../pages/Quote";
import { Welcome } from "../pages/Welcome";

export function Approutes(){
  return(
    <Navigator headerMode="none">
      <Screen
        name="Welcome"
        component={Welcome}
      />
      <Screen
        name="Quote"
        component={Quote}
      />
    </Navigator>
  )
}