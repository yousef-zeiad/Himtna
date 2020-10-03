import React, { useCallback, useEffect, useState } from 'react';
import { Container, SafeView } from './styled';
import { ActivityIndicator } from 'react-native';
import localStorage from '../helpers/localSorage';
import actions from '../../actions';
import { useDispatch } from 'react-redux'

export default function AuthLoading({ navigation }) {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getTokens() {
      const token = await localStorage.get('token');
      console.log(token, "tokens");
      if (token) {
        dispatch(actions.auth.setTokens(token))
        navigation.navigate('App');
      } else {
        navigation.navigate('Auth');
      }
    };
    getTokens();
  }, []);
  return (
    <Container>
      <SafeView forceInset={{ top: 'always' }}>
        <ActivityIndicator />
      </SafeView>
    </Container>
  );
}
