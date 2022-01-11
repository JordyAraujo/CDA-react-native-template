/**
 * If you are not going to use Google Social Login,
 * you will not need this entire folder.
 */

import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Button = styled(RectButton)`
  height: ${RFValue(56)}px;
  background-color: white;
  border-radius: 5px;
  align-items: center;
  flex-direction: row;
`;
export const ImageContainer = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: ${RFValue(16)}px;
  border-color: #edf0f1;
  border-right-width: 1px;
`;
export const TextButton = styled.Text`
  flex: 1;
  text-align: center;
  font-size: ${RFValue(16)}px;
`;
