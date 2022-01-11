/**
 * If you are not going to use Google Social Login,
 * you will not need this entire folder.
 */

import styled from 'styled-components';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;
export const Header = styled.View`
  width: 70%;
  height: 70%;
  justify-content: flex-end;
  align-items: center;
`;
export const TitleWrapper = styled.View`
  align-items: center;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(25)}px;
  text-align: center;
  margin-top: 45px;
`;
export const SignInTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 45px;
`;
export const Footer = styled.View`
  width: 100%;
  height: 30%;
  background-color: ${({ theme }) => theme.colors.primary};
`;
export const FooterWrapper = styled.View`
  margin-top: ${RFPercentage(-4)}px;
  padding: 0 32px;
`;
