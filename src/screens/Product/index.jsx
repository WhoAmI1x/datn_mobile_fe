import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProductCategoryList from './StackScreens/ProductCategoryList';
import AllProductByCategory from './StackScreens/AllProductByCategory';
import ProductDetail from './StackScreens/ProductDetail';

const Stack = createStackNavigator();

function DiscountCodeCategory() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="ProductCategoryList"
        component={ProductCategoryList}
      />
      <Stack.Screen
        name="AllProductByCategory"
        component={AllProductByCategory}
      />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
}

export default DiscountCodeCategory;
