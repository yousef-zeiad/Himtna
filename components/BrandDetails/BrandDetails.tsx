import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { Header } from './Header';
import {
  Container, BackgroundCover, BrandLogo, Logo,
  BrandLogoContainer, MainContainer, BrandsDescription, PromotionOffers
} from './styled';
import FastImage from 'react-native-fast-image';
import { ButtonsContainer, Button, ButtonText } from '../Shared/Shared';

const { width } = Dimensions.get('window');

export default function BrandDetails({ navigation }) {
  const promotion = navigation.getParam('promotion');
  const brand = navigation.getParam('brand');
  const { is_merchant } = useSelector(state => state.auth)
  console.log(brand)
  return (
    <>
      <Header title={brand.name.en} navigation={navigation} />
      <BackgroundCover style={{ width }} source={brand.image ? { uri: brand.image } : require('../../assets/branch_placeholder.png')} resizeMode={FastImage.resizeMode.cover} />
      <Container>
        <BrandLogoContainer>
          <BrandLogo>
            <Logo source={brand.logo ? { uri: brand.logo } : require('../../assets/logo_placeholder.png')} resizeMode={FastImage.resizeMode.cover} />
          </BrandLogo>
        </BrandLogoContainer>
      </Container>
      <MainContainer>
        <BrandsDescription sevices={brand.services.en} brands={brand} />
        <Text style={{ marginTop: 33, fontSize: 16, fontWeight: 'bold' }}>
          Offers
        </Text>
        <PromotionOffers brands={brand} navigation={navigation} onPress={() => { is_merchant === 0 && navigation.push('OfferDetails', { brand, promotion }) }} />
        {/* if is merchant true you have to return this button */}
      </MainContainer>
      {is_merchant === 1 && <ButtonsContainer>
        <Button onPress={() => navigation.push('QRPage', { promotion, brand })} >
          <ButtonText>Get QR Code</ButtonText>
        </Button>
      </ButtonsContainer>}
    </>
  )
};
