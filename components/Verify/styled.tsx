import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-navigation';
import FastImage from 'react-native-fast-image';
import Colors from '../../Colors';
import { ScrollView, FlatList } from 'react-native'

export const Container = styled.View`
  backgroundColor: ${Colors.white};
  paddingBottom: 20px;
  flex: 1;

  /* alignItems: center; */
`;
export const OfferDetailLogo = styled(FastImage)`
  height:152px;
  width:277px;
`;
export const LogoWrapper = styled(FastImage)`
 justifyContent: center;
 alignItems:center;
 paddingTop:24px;
 paddingBottom:20px
`;
export const Logo = () => (
  <LogoWrapper>
    <OfferDetailLogo source={require('../../assets/verification.png')}
      resizeMode={FastImage.resizeMode.contain} />
  </LogoWrapper>
);
export const ValidationTitle = styled.Text`
  fontSize: 16px;
  color:${Colors.secondary};
 alignSelf:center;
`;

export const ValidationWrapper = styled.View`
 justifyContent: center;
 alignItems: center;
`;
