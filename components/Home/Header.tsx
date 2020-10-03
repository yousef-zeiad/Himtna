import React from 'react';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity } from 'react-native';
// import { Logo } from '../Shared/Shared';
import { LogoContainer, Logo } from './styled';
import Colors from '../../Colors';

export const Header = ({ navigation }) => (
  <>
    <LogoContainer>
      <TouchableOpacity onPress={() => navigation.push('profilePage')}>
        <Logo
          source={require('../../assets/profile.png')}
          resizeMode={FastImage.resizeMode.cover}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { }}>
        <FastImage source={require('../../assets/card.png')} style={{ width: 30, height: 30 }} />
      </TouchableOpacity>
    </LogoContainer>
  </>
);
