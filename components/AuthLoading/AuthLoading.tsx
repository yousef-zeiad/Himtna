import React, {useEffect} from 'react';
import {Container, SafeView} from './styled';
import {ActivityIndicator} from 'react-native';
import localStorage from '../helpers/localSorage';
import actions from '../../actions';
import {useDispatch} from 'react-redux';

export default function AuthLoading({navigation}) {
  const dispatch = useDispatch();
  useEffect(() => {
    (async function getTokens() {
      const token = await localStorage.get('token');
      if (token) {
        dispatch(actions.auth.setTokens(token));
        navigation.navigate('App');
      } else {
        navigation.navigate('App');
        // navigation.navigate('Auth');
      }
    })();
  }, []);

  return (
    <Container>
      <SafeView forceInset={{top: 'always'}}>
        <ActivityIndicator />
      </SafeView>
    </Container>
  );
}
