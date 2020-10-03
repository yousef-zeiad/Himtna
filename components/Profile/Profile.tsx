import React, { useEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Container, Logout } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../actions';

export default function Profile({ navigation }) {
  const dispatch = useDispatch();

  return (
    <Container>
      <TouchableOpacity onPress={() => { dispatch(actions.auth.logout(navigation)); navigation.navigate('Auth') }}>
        <Logout >
          LogOut
        </Logout>
      </TouchableOpacity>
    </Container>
  )
}
