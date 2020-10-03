import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, FlatList, Platform, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { SafeAreaView } from 'react-navigation';
import { SharedElement } from 'react-navigation-shared-element';
import TouchableScale from 'react-native-touchable-scale';
import Colors from '../../Colors';

export const Container = styled.View`
 flex:1;
 justifyContent:center;
 alignItems:center;
`;

export const Logout = styled.Text`
 color:${Colors.gradient1}
`;
