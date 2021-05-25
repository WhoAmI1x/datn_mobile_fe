import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AllPersonalDiscountCode from './StackScreens/AllPersonalDiscountCode';
import CreatePersonalDiscountCode from './StackScreens/CreatePersonalDiscountCode';

const Stack = createStackNavigator();

function PersonalDiscountCode() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="AllPersonalDiscountCode"
        component={AllPersonalDiscountCode}
      />
      <Stack.Screen
        name="CreatePersonalDiscountCode"
        component={CreatePersonalDiscountCode}
      />
    </Stack.Navigator>
  );
}

export default PersonalDiscountCode;
