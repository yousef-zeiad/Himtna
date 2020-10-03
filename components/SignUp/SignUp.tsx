import React, { useCallback, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  Title, Button, ButtonsContainer, ButtonText, StackPage, Header,
  ErrorText, Body, InputLabel, TextInput, KeyboardView
} from '../Shared/Shared';
import { isEmail } from '../helpers/validators';
import actions from '../../actions';
import {
  SigninButton, HaveAccountTitle,
  SigninTitle, ButtonContainer, MerchantButton, UserButton, TextArea, Container
} from './styled';
import { BackgroundView } from '../CheckNumber/styled';


export default function SignUp({ navigation }) {
  const dispatch = useDispatch();
  const { control, handleSubmit, errors } = useForm();
  const onChange = args => ({ value: args[0].nativeEvent.text.toLowerCase() });

  const onSubmit = (form) => {
    dispatch(actions.auth.signup({ ...form, is_merchant: !!form.store }))
    navigation.goBack();
  }
  const onSubmitHandler = useCallback(handleSubmit(onSubmit), [handleSubmit, onSubmit]);
  const [showMerchant, setShowMerchant] = useState(false);
  const refs = {};
  const IsMerchant = () => {
    setShowMerchant(true);
  }
  const IsUser = () => {
    setShowMerchant(false);
  }

  return (
    <>
      <BackgroundView />
      <StackPage>
        <KeyboardView>
          <Body>
            <Container>
              <Title>What do you want to do ?</Title>
              <ButtonContainer>
                <UserButton onPress={IsUser}>
                  <SigninTitle>
                    Enjoy All Offers
             </SigninTitle>
                </UserButton>
                <MerchantButton onPress={IsMerchant} >
                  <SigninTitle>
                    List My Store
              </SigninTitle>
                </MerchantButton>
              </ButtonContainer>
              <InputLabel onPress={() => refs.name.focus()}>Name</InputLabel>
              <Controller
                as={<TextInput
                  ref={ref => refs.name = ref}
                  autoCorrect={false}
                  autoCapitalize={'none'}
                  returnKeyType={'done'}
                  autoCompleteType={'name'}
                  keyboardType={'default'}
                  textContentType={'name'}
                  placeholder={'Name'}
                  error={errors.name}
                  autoFocus={true}
                />}
                control={control}
                name={'name'}
                onChange={onChange}
                defaultValue={''}
                rules={{ required: true }}
              />
              {errors.name && <ErrorText>name is required</ErrorText>}

              <InputLabel onPress={() => refs.email.focus()}>Email</InputLabel>
              <Controller
                as={<TextInput
                  ref={ref => refs.email = ref}
                  autoCorrect={false}
                  autoCapitalize={'none'}
                  returnKeyType={'done'}
                  autoCompleteType={'email'}
                  keyboardType={'email-address'}
                  textContentType={'emailAddress'}
                  error={errors.email}
                  autoFocus={true}
                  placeholder={'Email'}
                />}
                control={control}
                name={'email'}
                onChange={onChange}
                defaultValue={''}
                rules={{ required: true, pattern: { value: isEmail, message: 'Wrong Email Address' } }}
              />
              {errors.email && <ErrorText>{errors.email.message || 'Email is required'}</ErrorText>}

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
              // rules={{ required: true, pattern: { value: isPhone, message: 'Wrong Phone Number' } }}
              />
              {errors.phone && <ErrorText>Phone number is required</ErrorText>}
              {
                showMerchant && <>
                  <InputLabel onPress={() => refs.store.focus()}>Store Name</InputLabel>
                  <Controller
                    as={<TextInput
                      ref={ref => refs.store = ref}
                      autoCorrect={false}
                      autoCapitalize={'none'}
                      returnKeyType={'done'}
                      autoCompleteType={'name'}
                      keyboardType={'default'}
                      textContentType={'name'}
                      placeholder={'Store name'}
                      error={errors.store}
                      autoFocus={true}
                    />}
                    control={control}
                    name={'store'}
                    onChange={onChange}
                    defaultValue={''}
                    rules={{ required: true }}
                  />
                  {errors.store && <ErrorText>store name is required</ErrorText>}
                  <InputLabel onPress={() => refs.description.focus()}>Store and services description</InputLabel>
                  <Controller
                    as={<TextArea
                      ref={ref => refs.description = ref}
                      autoCorrect={false}
                      autoCapitalize={'none'}
                      returnKeyType={'done'}
                      autoCompleteType={'name'}
                      keyboardType={'default'}
                      textContentType={'name'}
                      placeholder={'description'}
                      multiline={true}
                      numberOfLines={4}
                      error={errors.description}
                    />}
                    control={control}
                    name={'description'}
                    onChange={onChange}
                    defaultValue={''}
                    rules={{ required: true }}
                  />
                  {errors.description && <ErrorText> description  is required</ErrorText>}
                </>
              }
              <ButtonsContainer>
                <Button onPress={onSubmitHandler}>
                  <ButtonText>Sign up</ButtonText>
                </Button>
              </ButtonsContainer>
              <HaveAccountTitle>
                Already have an account ?
          </HaveAccountTitle>
              <SigninButton onPress={() => navigation.pop()}>
                <SigninTitle>
                  Login
            </SigninTitle>
              </SigninButton>
            </Container>
          </Body>
        </KeyboardView>
      </StackPage>
    </>
  );
}
