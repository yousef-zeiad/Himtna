import React, { useCallback, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Header from '../QRScreen/Header';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import localStorage from '../helpers/localSorage';
import actions from '../../actions';
import {
  Button, ButtonsContainer, ButtonText,
  ErrorText, TextInput,
} from '../Shared/Shared';
import { Logo, ValidationTitle, Container, ValidationWrapper } from './styled';
import AsyncStorage from '@react-native-community/async-storage';

export default function Verfiy({ navigation }) {
  const { control, handleSubmit, errors } = useForm();
  const [verify, setVerify] = useState(false)
  const phone = navigation.getParam('form')
  const onChange = args => ({ value: args[0].nativeEvent.text });
  const dispatch = useDispatch();
  const onSubmit = (form) => {
    console.log({ ...form, phone: phone.phone }, '...form, phone: phone.phone')
    setVerify(true)
    dispatch(actions.auth.login({ ...form, phone: phone.phone }))
    async function getTokens() {
      const token = await localStorage.get('token');
      const merchant = await localStorage.get('is_merchant');
      console.log(merchant)
      if (token) {
        dispatch(actions.auth.setTokens(token))
        navigation.push('Home');
      } else {
        navigation.push('Auth');
      }
    };
    getTokens();

  }
  const onSubmitHandler = useCallback(handleSubmit(onSubmit), [handleSubmit, onSubmit]);

  useEffect(() => {
    async function getTokens() {
      let token = null
      if (token) {
        dispatch(actions.auth.setTokens(token))
        navigation.push('Home');
      } else {
        navigation.push('Auth');
      }
      token = await localStorage.get('token');
    };
    getTokens();
  }, [])

  return (
    <>
      <Header name={"Verify Account"} navigation={navigation} />
      <Container>
        <Logo />
        <ValidationTitle>
          Enter 4-digit verification code sent to you at
      </ValidationTitle>
        <ValidationWrapper>
        </ValidationWrapper>
        <Controller
          as={<TextInput
            style={{ alignSelf: 'center', width: 100, justifyContent: 'center' }}
            autoCorrect={false}
            autoCapitalize={'none'}
            keyboardType={'number-pad'}
            textContentType={'oneTimeCode'}
            error={errors.otp}
            autoFocus={true}
          />}
          control={control}
          name={'otp'}
          onChange={onChange}
          defaultValue={''}
          rules={{ required: true, minLength: 4, maxLength: 4 }}
        />
        {errors.otp && <ErrorText style={{ alignSelf: 'center' }}>Wrong Code</ErrorText>}
        <ButtonsContainer>
          <Button onPress={onSubmitHandler}>
            <ButtonText>{verify ? 'Start' : 'Please Verify'}</ButtonText>
          </Button>
        </ButtonsContainer>
      </Container>
    </>
  )
}
