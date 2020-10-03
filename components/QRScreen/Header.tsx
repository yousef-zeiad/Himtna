
import {
  BackIcon
} from './styled';
import React from 'react';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import { SafeAreaView } from 'react-navigation';
import Colors from '../../Colors';

const HeaderWrapper = styled(SafeAreaView)`
  flexDirection: row;
  paddingLeft: 20px;
  paddingRight: 20px;
  paddingTop: 30px;
  paddingBottom: 14px;
  backgroundColor:${Colors.white};
`;
const HeaderContainer = styled.View`
  flexDirection: row;
  alignItems: center;
  justifyContent: space-between;
  height: 100%;
  width:130px;
`;
const HeaderTitleText = styled.Text`
  fontSize: 16px;
  fontWeight: bold;
  justifyContent: space-between;
  alignSelf: center;
`;
const HeaderTitleEditProfile = styled.TouchableOpacity`

`;
const PlusImageContainer = styled.TouchableOpacity`
  padding: 5px;
  backgroundColor: ${Colors.grey};
  borderRadius: 20px;
`;
const ViewMoreImage = styled(FastImage)`
  height: 14px;
  width: 14px;
`;
export const AddIcon = ({ onPress }) => <>
  <PlusImageContainer onPress={onPress}>
    <ViewMoreImage
      source={require('../../assets/back.png')}
      resizeMode={FastImage.resizeMode.contain}
    />
  </PlusImageContainer>
</>;

const HeaderLeft = ({ navigation }) => <>
  <HeaderContainer>
    <HeaderTitleEditProfile onPress={() => navigation.pop()}>
      <BackIcon>
        Cancel
      </BackIcon>
    </HeaderTitleEditProfile>
  </HeaderContainer>
</>;

const Header = ({ name, navigation }) =>
  <>
    <HeaderWrapper forceInset={{ top: 'never' }}>
      <HeaderLeft navigation={navigation} />
      <HeaderTitleText>{name}</HeaderTitleText>
    </HeaderWrapper>
  </>;

export default Header;
