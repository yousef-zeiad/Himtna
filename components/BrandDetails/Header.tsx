import React from 'react';
import { Animated, TouchableOpacity, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import RNLinearGradient from 'react-native-linear-gradient';
import Colors from '../../Colors';

export const BottomSheetHeader = styled.View`
  backgroundColor: ${Colors.white};
  overflow: hidden;
`;
export const BranchTileCover = styled(FastImage)`
  width: 100%;
  height: 490px;
  backgroundColor: ${props => props.backgroundColor};
`;


const ExternalHeader = styled.View`
  /* height: 50px; */
  flexDirection: row;
  alignItems: center;
  justifyContent: space-between;
  paddingRight: 20px;
  paddingLeft: 20px;
  paddingTop: 30px;
`;
const ChatButton = styled.TouchableOpacity`
  height: 33px;
  width: 33px;
  alignItems: center;
  justifyContent: center;
  padding: 15px;
  borderRadius: 20px;
  /* backgroundColor: ${Colors.white}; */
`;
const ChatIcon = styled(FastImage)`
 width: 20px;
 height: 20px;
`;
const BackButton = styled.TouchableOpacity`
  height: 20px;
  width: 20px;
  alignItems: center;
  justifyContent: center;
  padding: 15px;
  borderRadius: 20px;
  /* backgroundColor: ${Colors.white}; */
`;
const BackIcon = styled(FastImage)`
  height: 20px;
  width: 20px;
`;
const HeaderContainer = styled(Animated.View)`
  position: absolute;
  top: 0px;
  width: 100%;
  zIndex: 1;
  backgroundColor:'rgba(0,0,0,0.1)'
`;
const HeaderTitle = styled.Text`
  fontSize: 16px;
  fontWeight: bold;
  color: ${Colors.white}
`;
const HeaderTitleContainer = styled(Animated.View)`
  height: 20px;
`;
const HeaderGradient = styled(RNLinearGradient)`
  height: 80px;
  position: absolute;
  top: 0;
  width: 100%;
  opacity: 0.2;
`;

export const Header = ({ navigation, style, title, onPressMore, transitionStyle, color }) =>
  <HeaderContainer style={style}>
    {/* <Animated.View style={transitionStyle}>
      <HeaderGradient colors={['black']} />
    </Animated.View> */}
    <ExternalHeader style={{ opacity: 1 }}>
      <BackButton onPress={() => navigation.pop()}>
        <BackIcon
          source={require('../../assets/back.png')}
          resizeMode={FastImage.resizeMode.contain}
          tintColor={Colors.white}
        />
      </BackButton>
      <HeaderTitleContainer style={transitionStyle}>
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderTitleContainer>
      <ChatButton onPress={onPressMore}>
        <ChatIcon
          source={require('../../assets/share.png')}
          resizeMode={FastImage.resizeMode.contain}
          tintColor={Colors.white}
        />
      </ChatButton>
    </ExternalHeader>
  </HeaderContainer>;
