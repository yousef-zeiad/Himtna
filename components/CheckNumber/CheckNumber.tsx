import React, { useCallback, useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  Title, Button, ButtonsContainer, ButtonText, StackPage,
  ErrorText, Body, InputLabel, TextInput, KeyboardView
} from '../Shared/Shared';
import actions from '../../actions'
import { isEmail } from '../helpers/validators';
import { DontHaveTitle, SignupTitle, SignupButton, BackgroundView, Container } from './styled';

export default function CheckNumberForm({ navigation, props }) {
  const { control, handleSubmit, errors } = useForm();
  const onChange = args => ({ value: args[0].nativeEvent.text.toLowerCase() });
  const onSubmit = (form) => {
    dispatch(actions.auth.login({ ...form, phone: form.phone }))
    navigation.push('VerifyPage', { form })
  }
  const onSubmitHandler = useCallback(handleSubmit(onSubmit), [handleSubmit, onSubmit]);
  const refs = {};
  const dispatch = useDispatch()

  useEffect(() => {
    async function getTokens() {
      const token = await localStorage.get('token');
      console.log(token, 'token')
      if (token) {
        dispatch(actions.auth.setTokens(token))
        navigation.push('Home');
      } else {
        navigation.push('Auth');
      }
    };
    getTokens();
  }, [])

  return (
    <>
      <BackgroundView />
      <StackPage>
        <KeyboardView>
          <Body>
            <Container>
              <Title>Login</Title>
              <InputLabel onPress={() => refs.phone.focus()}>Phone Number</InputLabel>
              <Controller
                as={<TextInput
                  ref={ref => refs.phone = ref}
                  autoCorrect={false}
                  autoCapitalize={'none'}
                  returnKeyType={'done'}
                  autoCompleteType={'tel'}
                  keyboardType={'number-pad'}
                  textContentType={'telephoneNumber'}
                  error={errors.phone}
                  autoFocus={true}
                  placeholder={'+962'}
                />}
                control={control}
                name={'phone'}
                onChange={onChange}
                defaultValue={''}
                rules={{ required: true }}
              />
              {errors.phone && <ErrorText>Phone number is required</ErrorText>}
              <ButtonsContainer >
                <Button onPress={onSubmitHandler} >
                  <ButtonText>Login</ButtonText>
                </Button>
              </ButtonsContainer>
              <DontHaveTitle>
                Don't have an account ?
          </DontHaveTitle>
              <SignupButton onPress={() => navigation.push('SignUp')}>
                <SignupTitle>
                  SignUp
            </SignupTitle>
              </SignupButton>
            </Container>
          </Body>
        </KeyboardView>
      </StackPage>
    </>
  );
}
