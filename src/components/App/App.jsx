/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {connect} from 'react-redux';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#4563FF',
            inactiveTintColor: '#DFDFDF',
            labelStyle: {fontSize: 11},
            style: {height: 55},
          }}>
          <Tab.Screen
            name="Discount codes"
            component={() => (
              <View>
                <Text>Discount codes</Text>
              </View>
            )}
            options={{
              tabBarIcon: ({color, size}) => (
                <Fontisto name="shopping-sale" color={color} size={25} />
              ),
            }}
          />
          <Tab.Screen
            name="Sales"
            component={() => (
              <View>
                <Text>Sales</Text>
              </View>
            )}
            options={{
              tabBarIcon: ({color, size}) => (
                <Foundation name="burst-sale" color={color} size={34} />
              ),
            }}
          />
          <Tab.Screen
            name="Personal discount codes"
            component={() => (
              <View>
                <Text>Sales</Text>
              </View>
            )}
            options={{
              tabBarIcon: ({color, size}) => (
                <MaterialIcons name="money-off" color={color} size={30} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={() => (
              <View>
                <Text>Sales</Text>
              </View>
            )}
            options={{
              tabBarIcon: ({color, size}) => (
                <FontAwesome name="user" color={color} size={25} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(App);
