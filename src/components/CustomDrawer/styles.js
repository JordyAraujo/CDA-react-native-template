import styled from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

export const Header = styled.View`
  padding: ${RFValue(20)}px ${RFValue(21)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${RFValue(20)}px;
  border-bottom-width: 0.2px;
  border-bottom-color: #f0f2f5;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-bottom: 18px;
`;

export const Title = styled.Text`
  color: white;
  font-weight: bold;
`;
