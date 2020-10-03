import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-navigation';
import FastImage from 'react-native-fast-image';
import Colors from '../../Colors';
import { ScrollView, FlatList } from 'react-native'

export const Container = styled.View`
  backgroundColor: ${Colors.white};
  flex: 1;
  justifyContent:flex-start;
  align-items:center
`;
// export const OfferDetailLogo = styled(FastImage)`
// marginTop:30px;
//   height:236px;
//   width:277px;
//   paddingLeft: 26px;
//   paddingRight: 26px;
// `;
export const OfferDetailLogo = styled.View`
marginTop:100px;
  height:0px;
  width:277px;
  paddingLeft: 26px;
  paddingRight: 26px;
`;
export const Description = styled.Text`
  fontSize:12px;
  justifyContent:center;
  alignSelf:flex-start;
  marginTop:5px;
  paddingLeft: 26px;
  paddingRight: 26px;

`;
export const HeaderTitle = styled.Text`
  fontSize:14px;
  fontWeight:bold;
  marginBottom:5px;
  marginTop:20px;
  color: #000;
  paddingLeft: 26px;
  paddingRight: 26px;
`;
export const DiscountTitle = styled.Text`
  fontSize:14px;
  fontWeight:bold;
  marginBottom:5px;
  marginTop:20px;
  color: #000;
  paddingLeft: 26px;
  paddingRight: 26px;
`;
export const DateTitle = styled.Text`
marginBottom:10px;
  fontSize:14px;
  color: #000;
  paddingLeft: 26px;
  paddingRight: 26px;
`;
export const Discount = ({ title, offer, logo }) => (
  <>
    <DiscountTitle>
      {title}
    </DiscountTitle>
    <OfferContainer>

      <TagImage source={logo ? { uri: logo } : require('../../assets/Logo.png')}
        resizeMode={FastImage.resizeMode.contain}
        tintColor={Colors.primary} />
      <BranchTileAddress>{`${offer} % Off`}</BranchTileAddress>
    </OfferContainer>
  </>
);
export const Valid = ({ title, date }) => (
  <>
    <DiscountTitle>
      {title}
    </DiscountTitle>
    <DateTitle>
      {date}
    </DateTitle>
  </>
);
export const Logo = () => (
  <>
    {/* <OfferDetailLogo source={require('../../assets/logo_placeholder.png')}
      resizeMode={FastImage.resizeMode.contain} /> */}
    <OfferDetailLogo />
  </>
);

export const PlaceInfo = ({ description }) => (
  <>
    <Description>
      {description}
    </Description>
  </>
)
export const MainContainer = styled(ScrollView)`
  /* padding: 20px; */
`;
export const OffersTitle = styled.Text`
  fontSize: 16px;
  fontWeight: bold;
  paddingLeft: 26px;
  paddingRight: 26px;
  marginBottom: 10px
`;

const BranchTilePhotosContainer = styled.View`
  flexDirection: row;
  justifyContent: space-around;
  alignItems: center;
  width: 100%;
  height: 100%;
`;
const BranchTileCover = styled(FastImage)`
  width: 100%;
  height: 100%;
  borderRadius: 14px;
`;
const TagImage = styled(FastImage)`
  width: 20px;
  height: 20px;
`;

const BranchTileAddress = styled.Text`
  fontWeight: bold;
  fontSize: 16px;
  color: ${Colors.primary};
  alignSelf: flex-start;
  paddingLeft: 5px;
`;

const BranchTileTitleContainer = styled.View`
  borderBottomRightRadius: 14px;
  borderBottomLeftRadius: 14px;
  width: 100%;
  height: 84px;
  position: absolute;
  bottom: 0;
  backgroundColor: ${Colors.white};
  padding: 15px;
  paddingTop: 10px;
`;
const BranchTileWrapper = styled.View`
  width: 100%;
`;
const BranchTileContainer = styled.View`
  height: 215px;
  alignItems: center;
  flexDirection: row;
  backgroundColor: ${props => props.background};
  elevation: 4;
  borderRadius: 14px;
`;
const BranchTileTop = styled.View`
  shadowColor: ${Colors.black};
  shadowOffset: 0px 2px;
  shadowRadius: 5px;
  shadowOpacity: .1;
  height: 215px;
  marginRight: 20px;
  marginLeft: 20px;
  marginBottom: 10px;
`;
export const BranchesList = styled(FlatList)`
  width: 100%;
`;
export const OfferContainer = styled.View`
  flexDirection: row;
  paddingLeft: 26px;
  paddingRight: 26px;
`;
export const BranchTile = (({ navigation, id, promotion, onPress, promotion: {
  image, discounted_percentage, logo
} = {} }) => (
    <BranchTileTop >
      <BranchTileContainer background={Colors.secondary}>
        <BranchTileWrapper>
          <BranchTilePhotosContainer>
            <BranchTileCover
              source={image ? { uri: image } : require('../../assets/branch_placeholder.png')}
              resizeMode={FastImage.resizeMode.cover}
            />
          </BranchTilePhotosContainer>
        </BranchTileWrapper>
      </BranchTileContainer>
    </BranchTileTop>
  ))
