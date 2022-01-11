import React from 'react';
import { Header, Title } from './styles';
/**
 * If you are using Google social Login:
 *
  import { useAuth } from '../../hooks/auth'
*/

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

function CustomDrawer(props) {
  /**
   * If you are using Google social Login:
   *
    const { user } = useAuth();
   */
  return (
    <DrawerContentScrollView {...props}>
      <Header>
        {/**
         * Use this portion of code with Google Social Login, to show profile
         * avatar and user name.
         *
          <Avatar source={{ uri: user.photo }} />
          <Title>Olá, {user.name}</title>
        */}
        <Title>Olá, seja bem vindo(a)</Title>
      </Header>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export { CustomDrawer };
