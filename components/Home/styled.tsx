import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, FlatList, Platform, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { SafeAreaView } from 'react-navigation';
import { SharedElement } from 'react-navigation-shared-element';
import TouchableScale from 'react-native-touchable-scale';
import Colors from '../../Colors';

export const Container = styled.View`
   /* paddingLeft: 10px; */
`;
export const LogoContainer = styled(SafeAreaView)`
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
  width: 100%;
  paddingLeft: 35px;
  /* paddingTop: 30px; */
  paddingRight: 35px;
  /* paddingBottom:10px; */
  background: ${Colors.secondary};
`;
export const Logo = styled(FastImage)`
  width:60px;
  height:60px;
`;

const PromotionTilePhotosContainer = styled.View`
  flexDirection: row;
  justifyContent: space-around;
  alignItems: center;
  width: 100%;
  height: 100%;
`;
const PromotionTileCover = styled(FastImage)`
  width: 100%;
  height: 100%;
  borderRadius: 14px;
`;
const TagImage = styled(FastImage)`
  width: 20px;
  height: 20px;
`;
const PromotionTileLogo = styled(FastImage)`
  width: 100px;
  height: 90px;
  top: 10px;
  right:10px;
  zIndex: 1;
  position: absolute;
`;
const PromotionTileTitle = styled.Text`
  fontSize: 14px;
  lineHeight: 28px;
  color: ${Colors.subtitle};
  marginBottom: 10px;
`;
const PromotionTileAddress = styled.Text`
  fontWeight: bold;
  fontSize: 16px;
  color: ${Colors.primary};
  alignSelf: flex-start;
  paddingLeft: 5px;
`;

const PromotionTileTitleContainer = styled.View`
  borderBottomRightRadius: 14px;
  borderBottomLeftRadius: 14px;
  width: 100%;
  height: 80px;
  position: absolute;
  bottom: 0;
  backgroundColor: ${Colors.white};
  padding: 15px;
  paddingTop: 10px;
`;
const PromotionTileWrapper = styled.View`
  width: 100%;
`;
const PromotionTileContainer = styled.View`
  height: 215px;
  alignItems: center;
  flexDirection: row;
  backgroundColor: ${props => props.background};
  elevation: 4;
  borderRadius: 14px;
`;
const PromotionTileTop = styled.View`
  shadowColor: ${Colors.black};
  shadowOffset: 1px 2px;
  shadowRadius: 5px;
  shadowOpacity: .1;
  height: 215px;
  marginRight: 20px;
  marginLeft: 20px;
  marginBottom: 10px;
  width:330px;
`;
export const PromotionList = styled.ScrollView`
  /* width: 100%; */
  marginTop: 32px;
`;
export const OfferContainer = styled.View`
  flexDirection: row
`;
export const PromotionTile = ({ navigation, id, promotion, onPress, promotion: {
  image, name, discounted, logo
} = {} }) => {
  return (
    <TouchableScale
      style={{ flex: 1 }}
      activeScale={0.9}
      tension={50}
      friction={7}
      useNativeDriver
      onPress={() => navigation.push('OfferDetails', { promotion })}
    // onPress={onPress ? (() => onPress()) : (() => navigation.push('OfferDetails', {}))}
    >
      <PromotionTileTop >
        <PromotionTileContainer background={Colors.secondary}>
          <PromotionTileWrapper>
            <PromotionTilePhotosContainer>
              <SharedElement id={`item.${promotion}.photo`} style={{ width: '100%', height: '100%' }}>
                <PromotionTileCover
                  source={image ? { uri: image } : require('../../assets/branch_placeholder.png')}
                  resizeMode={FastImage.resizeMode.cover}
                />
              </SharedElement>
            </PromotionTilePhotosContainer>
            <PromotionTileTitleContainer>
              <PromotionTileTitle>{name.en}</PromotionTileTitle>
              <OfferContainer>

                <TagImage source={require('../../assets/Logo.png')}
                  resizeMode={FastImage.resizeMode.contain}
                  tintColor={Colors.primary} />
                <PromotionTileAddress>{`${discounted} % Off`}</PromotionTileAddress>
              </OfferContainer>
              {/* <PromotionTileLogo
                source={logo ? { uri: logo } : require('../../assets/logo_placeholder.png')}
                resizeMode={FastImage.resizeMode.contain}
              /> */}
            </PromotionTileTitleContainer>
          </PromotionTileWrapper>
        </PromotionTileContainer>
      </PromotionTileTop>
    </TouchableScale>
  )
};
export const Title = styled.Text`
  justifyContent:center;
  alignSelf:flex-start;
  color: ${Colors.secondary};
  fontSize: ${props => props.fontSize || 32}px;
  fontWeight: bold;
  lineHeight: ${props => props.noMargin ? 0 : 40}px;
  marginBottom: 0px;
  marginTop: ${props => props.noMargin ? 0 : 10}px;
  paddingRight: 25px;
`;
export const ButtonContainer = styled.View`
  justifyContent: space-between;
  alignItems:center ;
  flexDirection:row;
  paddingLeft: 25px;
`;
const CategoryTilePictureShadows = props => props.selected ? `
  shadowColor: ${Colors.shadow};
  shadowOffset: 0 4px;
  shadowRadius: 4px;
  shadowOpacity: 0.3;
  elevation: 5;
`: '';
const CategoryTilePicture = styled(FastImage)`
  width: 25px;
  height: 25px;
`;
const CategoryTilePictureContainer = styled.View`
  width: 55px;
  height: 55px;
  backgroundColor: ${props => props.selected ? Colors.primary : Colors.gradient3};
  borderRadius: 50px;
  justifyContent: center;
  alignItems: center;
  ${CategoryTilePictureShadows}
`;
const CategoryTileTitle = styled.Text`
  marginTop: 3px;
  fontSize: 12px;
  color: ${props => props.selected ? Colors.primary : Colors.secondary};
`;
const CategoryTileWrapper = styled.View`
  justifyContent: space-between;
  alignItems: center;
  flexDirection: column;
  paddingRight: 25px;
`;
const CategoryTileContainer = styled.TouchableOpacity`
  backgroundColor: transparent;
  marginTop:30px
`;
export const CategoriesList = styled.ScrollView`
  width: 100%;
  marginBottom: 36px;
`;
export const CategoryTile = ({ category: { image, name } = {}, onPress, selected }) => (
  <CategoryTileContainer onPress={onPress}>
    <CategoryTileWrapper>
      <CategoryTilePictureContainer selected={selected}>
        <CategoryTilePicture
          source={image ? { uri: image } : require('../../assets/Logo.png')}
          resizeMode={FastImage.resizeMode.contain}
          tintColor={selected ? Colors.white : Colors.white}
        />
      </CategoryTilePictureContainer>
      <CategoryTileTitle selected={selected}>{name.en}</CategoryTileTitle>
    </CategoryTileWrapper>
  </CategoryTileContainer>
);
export const PromotionOffersContainer = styled.TouchableOpacity`
 height: 215px;
  alignItems: flex-start;
  justify-content:center;
  flexDirection: row;
  backgroundColor: ${props => props.background};
  elevation: 4;
  borderRadius: 14px;
`;
const PromotionOffersTop = styled.View`
 shadowColor: ${Colors.black};
  shadowOffset: 0px 2px;
  shadowRadius: 5px;
  shadowOpacity: .1;
  height: 215px;
  marginBottom: 10px;

`;
const PromotionOffersCard = styled.View`
  paddingLeft: 15px;
  paddingRight: 15px;
  paddingBottom: 17px;
`;
const ServeiceTitle = styled.Text`
  fontSize: 12px;
  color: ${Colors.secondary};
  alignSelf: flex-start;

`;
const PromotionOffersLogo = styled.View`
  width: 60px;
  height: 60px;
  top: 10px;
  right:3px;
  bottom:0px;
  zIndex: 1;
  position: absolute;
  backgroundColor:${Colors.gradient3};
  justifyContent: center;
  alignItems: center;
  borderRadius: 50px;
`;
const PromotionDescount = styled.Text`
  color: ${Colors.white};
  justifyContent: center;
  alignItems: center;
  /* fontWeight:bold; */
`;

const PromotionOffersWrapper = styled.View`
  width: 160px;
`;
const PromotionOffersPhotosContainer = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
  width: 100%;
  height: 100%;
  paddingRight: 5px;
  paddingLeft: 5px;
  padding-bottom:40px
`;
const PromotionOffersCover = styled(FastImage)`
  width: 100%;
  height: 85%;
  borderRadius: 15px;
`;
export const BrandsList = styled(FlatList)`
  width: 100%;
`;

export const PromotionOffers = ({ navigation, promotion, onPress, brands: {
  image, name, services, discount, description, id } = {} }) => (
    <PromotionOffersCard>
      <PromotionOffersTop>
        <PromotionOffersContainer background={Colors.white}>
          <PromotionOffersWrapper>
            <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
              <PromotionOffersPhotosContainer>
                {
                  discount === 0 ? <></> :
                    <PromotionOffersLogo>
                      <PromotionDescount>
                        Up To
                </PromotionDescount>
                      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>{`${discount}%`}</Text>
                    </PromotionOffersLogo>
                }
                <PromotionOffersCover
                  source={image ? { uri: image } : require('../../assets/branch_placeholder.png')}
                  resizeMode={FastImage.resizeMode.cover}
                />
              </PromotionOffersPhotosContainer>
              <PromotionTileTitleContainer>
                <PromotionTileTitle numberOfLines={1}>{name.en}</PromotionTileTitle>
                <ServeiceTitle numberOfLines={1}>{services.en}</ServeiceTitle>
              </PromotionTileTitleContainer>
            </TouchableOpacity>
          </PromotionOffersWrapper>
        </PromotionOffersContainer>
      </PromotionOffersTop>
    </PromotionOffersCard>
  )
