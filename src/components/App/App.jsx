/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';
import {actGetUserInfo, actRegister} from '../../redux/actions/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DiscountCode from '../../screens/DiscountCode';
import Product from '../../screens/Product';
import PersonalDiscountCode from '../../screens/PersonalDiscountCode';
import Profile from '../../screens/Profile';
import Login from '../../screens/Login';
import isFalsyValue from '../../utils/isFalsyValue';
import Loading from '../Loading';
import {Container} from './styled';

const Tab = createBottomTabNavigator();

function App({loading: {isShowLoading}, userInfo, actGetUserInfo}) {
  const isLoggedIn = Object.keys(userInfo).length !== 0;

  useEffect(() => {
    AsyncStorage.getItem('accessToken', (err, accessToken) => {
      if (Object.keys(userInfo).length === 0 && !isFalsyValue(accessToken)) {
        actGetUserInfo();
      }
    });
  }, []);

  useEffect(() => {
    const getStorage = async () => {
      let allStorageKey = [];
      let allValues = {};

      try {
        allStorageKey = await AsyncStorage.getAllKeys();

        for (let i = 0; i < allStorageKey.length; i++) {
          allValues = {
            ...allValues,
            [allStorageKey[i]]: await AsyncStorage.getItem(allStorageKey[i]),
          };
        }
      } catch (e) {}

      console.log('----->All key storage: ', allStorageKey, '<-----');
      // console.log('All value storage: ', allValues);
    };

    getStorage();
  }, []);

  // console.log('----->userInfo: ', userInfo, '<-----');
  return (
    <Container>
      {isShowLoading && <Loading />}
      <StatusBar />
      {isLoggedIn ? (
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#4563FF',
            inactiveTintColor: '#DFDFDF',
            labelStyle: {fontSize: 11},
            style: {height: 55},
          }}>
          <Tab.Screen
            name="Mã giảm giá"
            component={DiscountCode}
            options={{
              tabBarIcon: ({color, size}) => (
                <Fontisto name="shopping-sale" color={color} size={25} />
              ),
            }}
          />
          <Tab.Screen
            name="Sản phẩm"
            component={Product}
            options={{
              tabBarIcon: ({color, size}) => (
                <Foundation name="burst-sale" color={color} size={34} />
              ),
            }}
          />
          <Tab.Screen
            name="Mã cá nhân"
            component={PersonalDiscountCode}
            options={{
              tabBarIcon: ({color, size}) => (
                <MaterialIcons name="money-off" color={color} size={30} />
              ),
            }}
          />
          <Tab.Screen
            name="Cá nhân"
            component={Profile}
            options={{
              tabBarIcon: ({color, size}) => (
                <FontAwesome name="user" color={color} size={25} />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <Login />
      )}
    </Container>
  );
}

const mapStateToProps = state => ({
  userInfo: state.user,
  loading: state.loading,
});

const mapDispatchToProps = {
  actRegister,
  actGetUserInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
