import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import FastImage from 'react-native-fast-image';
import Colors from '../../Colors';

export const DontHaveTitle = styled.Text`
  fontSize: 16px;
  alignSelf: center;
  justifyContent: center;
  marginTop: 15px;
`;

export const SignupButton = styled.TouchableOpacity`
  /* height: 19px;
  marginTop: 2px; */
  alignSelf: center;
`;
export const SignupTitle = styled.Text`
  fontSize: 16px;
  fontWeight: bold;
  color: ${Colors.secondary};
`;
export const BackgroundContainer = styled.View`
  backgroundColor:${Colors.secondary};
  justifyContent: center;
  alignItems: center;
  flex:.7
`;

export const LogoContainer = styled.View`
  flexDirection: row;
  justifyContent: center;
  alignItems: center;
  paddingLeft: 24px;
  paddingRight: 25px;
  paddingTop: 24px;
  paddingBottom: 24px;
  borderRadius:20px;
`;
export const Logo = styled(FastImage)`
  width: 37.12px;
  height: 41.55px;
`;
export const BackgroundView = () => (
  <BackgroundContainer>
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[Colors.gradient1, Colors.gradient2, Colors.gradient3]}
      style={{ borderRadius: 20 }}
    >
      <LogoContainer>
        <Logo
          source={require('../../assets/Logo.png')}
          resizeMode={FastImage.resizeMode.contain}
          tintColor={Colors.white} />
      </LogoContainer>
    </LinearGradient>
    <HimetnaTitle>
      Himtna
    </HimetnaTitle>
    <SupTitle>
      Jordan’s ultimate offers provider
    </SupTitle>
  </BackgroundContainer>
);

export const HimetnaTitle = styled.Text`
  fontSize: 33px;
  color: ${Colors.white};
  marginTop: 28px
`;
export const SupTitle = styled.Text`
  fontSize: 14px;
  color: ${Colors.white};
  marginTop: 4px;
`;

export const Container = styled.View`
  paddingHorizontal:25px;
  justifyContent:center;
  paddingTop:35px
`;
