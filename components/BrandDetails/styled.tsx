import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, FlatList, Platform, ScrollView, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { SafeAreaView } from 'react-navigation';
import { SharedElement } from 'react-navigation-shared-element';
import TouchableScale from 'react-native-touchable-scale';
import Colors from '../../Colors';


export const Container = styled.View`
  backgroundColor:${Colors.white};
  flex: 1;
  borderTopLeftRadius: 30px;
  borderTopRightRadius: 30px;
  position: absolute;
  top:190px;
  bottom:0;
  left:0;
  right:0;
  alignItems:center;
  justifyContent:center;
`;

export const BackgroundCover = styled(FastImage)`
  height:210px;
  width:100%;
`;
export const BrandLogoContainer = styled.View`
  borderRadius: 50px;
  border: 1px ${Colors.placeholder};
  backgroundColor:${Colors.grey};
  position: absolute;
  top:-30px;
  left:150px;
  right:0px;
  height:100px;
  width:100px;
  alignSelf:center;
  justifyContent:center;
`;
export const BrandLogo = styled.View`
  borderRadius: 50px;
  backgroundColor:${Colors.white};
  height:83px;
  width:83px;
  alignSelf:center;
  justifyContent:center;
  shadowColor: #000;
  shadowOffset: 1px 0px;
  shadowOpacity: 0.25;
  shadowRadius: 4px;
  elevation: 5;
  paddingLeft:3px;
  paddingRight:3px;
`;
export const Logo = styled(FastImage)`
  height:64px;
  width:76px;
  borderRadius:50px
`;

export const MainContainer = styled.ScrollView`
  paddingLeft:20px;
  paddingRight:20px;
  marginTop:24px
`;
export const BrandDescription = styled.Text`
  fontSize:12px;
  color:${Colors.black};
  paddingTop:50px
`;

export const BrandsDescription = ({ navigation, description, location, sevices, brands: { open_time, close_time } = {} }) => (
  <>
    <BrandDescription>
      {description ? description : ''}
    </BrandDescription>
    <Text style={{ marginTop: 13 }}>
      Working hours :
      <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
        {` ${open_time ? open_time : ''} - ${close_time ? close_time : ''}`}
      </Text>
    </Text>
    <Text style={{ marginTop: 6 }}>
      Address :
      <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
        {location ? location : ''}
      </Text>
    </Text>
    <Text style={{ marginTop: 6 }}>
      Phone number :
      <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
        0799123456
      </Text>
    </Text>
  </>
)
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
  justifyContent: space-between;
  alignItems: center;
  flexDirection: column;
  marginTop: 17px;
`;

const PromotionOffersWrapper = styled.View`
  width: 100%;
`;
const PromotionOffersPhotosContainer = styled.View`
  flexDirection: row;
  justifyContent: space-around;
  alignItems: center;
  width: 100%;
  height: 100%;
`;
const PromotionOffersCover = styled(FastImage)`
  width: 100%;
  height: 100%;
  borderRadius: 14px;
`;
const PromotionTileTitleContainer = styled.View`
  borderBottomRightRadius: 14px;
  borderBottomLeftRadius: 14px;
  width: 100%;
  height: 84px;
  position: absolute;
  bottom: 0px;
  backgroundColor: ${Colors.white};
  padding: 0px 15px;
  paddingTop: 10px;
`;

const PromotionTileTitle = styled.Text`
  fontSize: 14px;
  lineHeight: 28px;
  color: ${Colors.subtitle};
  marginBottom: 10px;
`;
export const OfferContainer = styled.View`
  flexDirection: row;
`;
const TagImage = styled(FastImage)`
  width: 20px;
  height: 20px;
`;
const PromotionTileAddress = styled.Text`
  fontWeight: bold;
  fontSize: 16px;
  color: ${Colors.primary};
  alignSelf: flex-start;
  paddingLeft: 5px;
`;
const PromotionTileLogo = styled(FastImage)`
  width: 23.68px;
  height: 22px;
  top: 0px;
  right:0px;
  zIndex: 1;
  position: absolute;
`;

export const PromotionOffers = ({ navigation, promotion, onPress, brands: {
  image, name, discount, logo } = {} }) => (
    <PromotionOffersCard>
      <PromotionOffersTop>
        <PromotionOffersContainer background={Colors.secondary}>
          <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
            <PromotionOffersWrapper>
              <PromotionOffersPhotosContainer>
                {/* <SharedElement id={`item.${promotion}.photo`} style={{ width: '100%', height: '100%' }}> */}
                <PromotionOffersCover
                  source={image ? { uri: image } : require('../../assets/branch_placeholder.png')}
                  resizeMode={FastImage.resizeMode.cover}
                />
                {/* </SharedElement> */}
              </PromotionOffersPhotosContainer>
              <PromotionTileTitleContainer>
                <PromotionTileTitle>{name.en}</PromotionTileTitle>
                <OfferContainer>
                  <TagImage source={require('../../assets/Logo.png')}
                    resizeMode={FastImage.resizeMode.contain}
                    tintColor={Colors.primary} />
                  <PromotionTileAddress>{`${discount} % Off`}</PromotionTileAddress>
                  {/* <TouchableOpacity onPress={onPress} style={{
                    top: 0,
                    right: 0,
                    zIndex: 1,
                    left: 0,
                    position: 'absolute'
                  }}>
                    <PromotionTileLogo
                      source={require('../../assets/fav.png')}
                      resizeMode={FastImage.resizeMode.contain}
                    />
                  </TouchableOpacity> */}
                </OfferContainer>
              </PromotionTileTitleContainer>
            </PromotionOffersWrapper>
          </TouchableOpacity>
        </PromotionOffersContainer>
      </PromotionOffersTop>
    </PromotionOffersCard>
  )
