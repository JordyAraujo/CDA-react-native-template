import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import { PublicRoutes } from './public.routes';
import { PrivateRoutes } from './private.routes';

/**
 * Custom hook for Google Social Login
 *
  import { useAuth } from '../hooks/auth';
*/

export function Routes() {
  // const { user } = useAuth();

  return (
    <NavigationContainer>
      {/**
       * If the user is logged in, show private routes
       *
        {user.id ? <PrivateRoutes /> : <PublicRoutes />}
      */}
      <PrivateRoutes />
    </NavigationContainer>
  );
}
