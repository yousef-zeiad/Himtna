import React from 'react';
import { Header } from './Header';
import {
  Container, Logo, PlaceInfo, MainContainer,
  HeaderTitle, BranchTile, Discount, Valid
} from './styled';
import { ButtonsContainer, Button, ButtonText } from '../Shared/Shared';

export default function OfferDetails({ navigation }) {
  const promotion = navigation.getParam('promotion');
  const brand = navigation.getParam('brand')

  return (
    <>
      <Header title={'Offers Details'} navigation={navigation} />
      <Container>
        <Logo />
        <MainContainer>
          <BranchTile promotion={promotion ? promotion : brand} navigation={navigation} />
          <HeaderTitle>
            {promotion ? promotion.name.en : brand.name.en}
          </HeaderTitle>
          <PlaceInfo
            description={promotion ? promotion.description.en : brand.services.en}
          />
          <Discount title={'Discount'} offer={brand ? brand.discount : promotion.discounted} />
          <Valid title={'Valid till'} date={'20/10/2017'} />
          <ButtonsContainer>
            <Button onPress={() => navigation.push('QRPage', { promotion, brand })} >
              <ButtonText>Get QR Code</ButtonText>
            </Button>
          </ButtonsContainer>
        </MainContainer>
      </Container>
    </>
  )
}
