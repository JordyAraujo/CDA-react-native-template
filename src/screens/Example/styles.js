import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: ${RFPercentage(1)}px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding-top: ${Platform.OS === 'android' ? 40 : 80}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.paragraph};
`;
