import React from 'react';

//Create Stack navigation
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Pages
import Home from '../../pages/Home';
import DetailTrack from '../../pages/DetailTrack';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="DetailTrack"
            component={DetailTrack}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Router;
