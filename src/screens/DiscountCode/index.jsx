import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DiscountCodeCategoryList from './StackScreens/DiscountCodeCategoryList';
import AllDiscountCodeByCategory from './StackScreens/AllDiscountCodeByCategory';

const Stack = createStackNavigator();

function DiscountCodeCategory() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="DiscountCodeCategoryList"
        component={DiscountCodeCategoryList}
      />
      <Stack.Screen
        name="AllDiscountCodeByCategory"
        component={AllDiscountCodeByCategory}
      />
    </Stack.Navigator>
  );
}

export default DiscountCodeCategory;
