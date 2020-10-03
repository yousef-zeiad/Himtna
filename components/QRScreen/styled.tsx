import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-navigation';
import FastImage from 'react-native-fast-image';
import Colors from '../../Colors';
import { ScrollView, FlatList } from 'react-native'


export const BackButton = styled.TouchableOpacity`
  /* height: 35px;
  width: 35px; */
  /* alignItems: center;
  justifyContent: center; */
`;

export const BackIcon = styled.Text`
  fontSize: 14px;
  color: ${Colors.primary};
  fontWeight: bold;
`;
export const Title = styled.Text`
  color: ${Colors.black};
  fontSize: 16px;
  fontWeight: bold;
  justifyContent: center;
`;
export const OfferDetailLogo = styled(FastImage)`
  height:200px;
  width:277px;
`;
export const LogoWrapper = styled(FastImage)`
 justifyContent: center;
 alignItems:center;
 paddingTop:30px
`;

export const Logo = ({ message }) => (
  <LogoWrapper>
    <OfferDetailLogo source={`data:image/png;base64,${message}` ? { uri: `data:image/png;base64,${message}` } : require('../../assets/logo_placeholder.png')}
      resizeMode={FastImage.resizeMode.contain} />
  </LogoWrapper>
);
export const Container = styled.View`
  backgroundColor: ${Colors.white};
  paddingBottom: 20px;
  flex: 1;
  justify-content:center;
  alignItems:center
`;
export const BranchTitle = styled.Text`
  color: ${Colors.black};
  fontSize: 14px;
  fontWeight: bold;
  justifyContent: center;
  alignItems:center;
`;
export const OfferTitle = styled.Text`
  color: ${Colors.primary};
  fontSize: 20px;
  fontWeight: bold;
  justifyContent: center;
  alignItems:center;
  paddingLeft:8px
`;
export const OfferWrapper = styled(FastImage)`
 justifyContent: center;
 alignItems:center;
 flex-direction:row
`;
export const OfferTile = ({ id, branch, offer }) => (
  <OfferWrapper>
    <BranchTitle>
      {branch}
    </BranchTitle>
    <OfferTitle>
      {offer}
    </OfferTitle>
  </OfferWrapper>
)
