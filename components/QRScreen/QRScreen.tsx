import React, { useEffect, useState } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Header from './Header';
import { Logo, Container, OfferTile } from './styled';


export default function QRScreen({ navigation }) {
  const promotion = navigation.getParam('promotion');
  const brand = navigation.getParam('brand');
  const [promotions, setProm] = useState([]);
  const { is_merchant } = useSelector(state => state.auth)

  useEffect(() => {
    const fetchPromo = async () => {
      const result = await axios.get(`https://himtna.com/api/v1/qr?promotion_id=${promotion.id}`);
      setProm(result.data.message);
    }
    fetchPromo()
  }, [setProm]);

  const onSuccess = e => {
    // Linking.openURL(e.promotion, console.log(promotion, 'd'))

    navigation.push('OfferDetails', { brand, promotion })
    console.log(brand.id, "brans")

    // .catch(err =>
    //   console.error('An error occured', err)
    // );
  };
  return (
    <>
      <Header name={'QR Code'} navigation={navigation} />
      <Container>
        {is_merchant === 0 && <>
          <OfferTile
            branch={`${promotion ? promotion?.name.en : brand?.name.en} Offer`}
            offer={`${promotion ? promotion.discounted : brand.discount} %`} />
          <Logo message={promotions} /></>}
        {is_merchant === 1 && <QRCodeScanner
          showMarker={true}
          markerStyle={{ borderColor: '#D1193E' }}
          onRead={onSuccess}
        />}
      </Container>
    </>
  )
}
