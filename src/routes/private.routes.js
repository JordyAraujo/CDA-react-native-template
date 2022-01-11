/**
 * Commented code in this file is used to render Navigation as Bottom Tabs.
 * If you want to use Navigation by Drawers, just delete all commented code.
 * If you want to use Bottom Tab Navigation, use the commented code instead.
 */

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawer } from '../components/CustomDrawer';
import { Example } from '../screens/Example';

/**
 * If you choose to use Bottom Tab Navigation:
 *
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  import { MaterialIcons } from '@expo/vector-icons'
  const { Navigator, Screen } = createBottomTabNavigator();
  import { useTheme } from 'styled-components';
*/

const { Navigator, Screen } = createDrawerNavigator();

export function PrivateRoutes() {
  /**
   * If you choose to use Bottom Tab Navigation:
   *
    const theme = useTheme();
  */

  return (
    <Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#031229',
          width: 240,
        },
        headerTitle: '',
        headerTransparent: true,
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#fff',
        headerTintColor: '#FFFFFF',
      }}
    >
      <Screen name="Example1" component={Example} />
      <Screen name="Example2" component={Example} />
    </Navigator>

  /**
     * If you choose to use Bottom Tab Navigation:
     *
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveBackgroundColor: theme.colors.primary,
          tabBarLabelPosition: 'beside-icon',
          tabBarStyle: {
            height: 50,
          }
        }}
      >
        <Screen
          name='Example1'
          component={Example}
          options={{
            tabBarIcon: (({ size, color }) =>
              <MaterialIcons
                name="format-list-bulleted"
                size={size}
                color={color}
              />
            )
          }}
        />

        <Screen
          name='Example2'
          component={Example}
          options={{
            tabBarIcon: (({ size, color }) =>
              <MaterialIcons
                name="format-list-bulleted"
                size={size}
                color={color}
              />
            )
          }}
        />

        <Screen
          name='Example3'
          component={Example}
          options={{
            tabBarIcon: (({ size, color }) =>
              <MaterialIcons
                name="format-list-bulleted"
                size={size}
                color={color}
              />
            )
          }}
        />
      </Navigator>
    */
  );
}
