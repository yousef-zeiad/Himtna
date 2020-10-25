import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { Header } from './Header';
import {
  Container, BackgroundCover, BrandLogo, Logo,
  BrandLogoContainer, MainContainer, BrandsDescription, PromotionOffers
} from './styled';
import FastImage from 'react-native-fast-image';
import { ButtonsContainer, Button, ButtonText } from '../Shared/Shared';
import { PromotionTile } from '../Home/styled';

const { width } = Dimensions.get('window');

export default function BrandDetails({ navigation }) {
  const promotion = navigation.getParam('promotion');
  const brand = navigation.getParam('brand');
  const is_merchant = navigation.getParam('is_merchant');
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
        <BrandsDescription brands={brand} />
        <Text style={{ marginTop: 33, fontSize: 16, fontWeight: 'bold' }}>
          Offers
        </Text>
        {brand.promotions.map(promo =>
          <PromotionOffers discounted={promo.discounted} key={promo.id} brands={promo} navigation={navigation}
            onPress={() => is_merchant ? null : navigation.push('OfferDetails', { promotion: promo, brand })} />
        )}

        {/* if is merchant true you have to return this button */}
      </MainContainer>
      {is_merchant === 1 && <ButtonsContainer>
        <Button onPress={() => navigation.push('QRPage', { promotion, brand, is_merchant })} >
          <ButtonText>{is_merchant === 1 ? 'Scan Qr' : 'Get QR Code'}</ButtonText>
        </Button>
      </ButtonsContainer>}
    </>
  )
};
