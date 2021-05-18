import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeProfile from './StackScreens/HomeProfile';
import EcommerceAccount from './StackScreens/EcommerceAccount';
import ProductSearchedDetail from './StackScreens/ProductSearchedDetail';
import Guide from './StackScreens/Guide';
import SearchProduct from './StackScreens/SearchProduct';
import Cart from './StackScreens/Cart';

const Stack = createStackNavigator();

function Profile() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="SearchProduct">
      <Stack.Screen name="HomeProfile" component={HomeProfile} />
      <Stack.Screen name="EcommerceAccount" component={EcommerceAccount} />
      <Stack.Screen name="SearchProduct" component={SearchProduct} />
      <Stack.Screen
        name="ProductSearchedDetail"
        component={ProductSearchedDetail}
      />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Guide" component={Guide} />
    </Stack.Navigator>
  );
}

export default Profile;
