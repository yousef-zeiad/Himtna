import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../actions';
import { Header } from './Header';
import { Body, StackPage } from '../Shared/Shared';
import Search from '../Search/Search';
import {
  PromotionTile, Title, Container,
  ButtonContainer, CategoryTile, PromotionOffers,
  CategoriesList, PromotionList, BrandsList
} from './styled';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeView } from '../AuthLoading/styled';

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const toggleFav = navigation.getParam('toggleFav');
  const [data, setData] = useState([]);
  const [promotions, setProm] = useState([]);
  const [brands, setBrand] = useState([]);
  const { is_merchant } = useSelector(state => state.auth)

  useEffect(() => {
    const fetchData = async () => {
      const result = await dispatch(actions.main.loadCategories());
      setData(result.payload.data.data);
    }
    fetchData()
  }, [setData]);

  useEffect(() => {
    const fetchPromotion = async () => {
      const result = await dispatch(actions.main.getPromotions());
      setProm(result.payload.data.data);
    }
    fetchPromotion()
  }, [setProm]);

  useEffect(() => {
    const fetchBrand = async () => {
      const result = await dispatch(actions.main.getBrands(data));
      setBrand(result.payload.data.data);
    }
    fetchBrand()
  }, [setBrand]);

  return (
    <>
      <Header navigation={navigation} />
      <StackPage >
        <Body nestedScrollEnabled={true}>
          <Search navigation={navigation} />
          {is_merchant === 0 && promotions ? <PromotionList horizontal contentContainerStyle={{}} showsHorizontalScrollIndicator={false}>
            {promotions.map(promotion =>
              <PromotionTile key={promotion.id} promotion={promotion} navigation={navigation} onPress={() => { }} />
            )}
          </PromotionList> : <SafeView forceInset={{ top: 'always' }}>
              {is_merchant === 0 && <ActivityIndicator />}
            </SafeView>}

          <Container>
            {is_merchant === 0 && <ButtonContainer>
              <Title fontSize={16}>
                All Offers
              </Title>
              <Title fontSize={16} style={{ color: '#c2c2c2' }}>
                Offers Near Me
              </Title>
              <TouchableOpacity onPress={() => console.log(toggleFav, 'toggleFav')}>
                <Title fontSize={16} style={{ color: '#c2c2c2' }}>
                  My Favorites
              </Title>
              </TouchableOpacity>
            </ButtonContainer>}
            {is_merchant === 0 && <CategoriesList bounces horizontal contentContainerStyle={{ paddingLeft: 20 }} showsHorizontalScrollIndicator={false}>
              {data.map(category => <CategoryTile category={category} key={category.id}
                onPress={() => { category.id }}
                selected={''} />)}
            </CategoriesList>}
            <Title fontSize={16} style={{ paddingLeft: 20 }}>
              Restorants
            </Title>
            {brands ? <BrandsList
              horizontal={false}
              numColumns={2}
              data={brands}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (<PromotionOffers brands={item} key={item.id}
                navigation={navigation}
                onPress={() => navigation.push('BrandDetailsPage', { brand: item, promotions, is_merchant })} />)}
              onEndReachedThreshold={1}
              contentContainerStyle={{ justifyContent: 'center', alignSelf: 'center' }}
              nestedScrollEnabled={true}
            /> : <SafeView forceInset={{ top: 'always' }}>
                <ActivityIndicator />
              </SafeView>}
          </Container>
        </Body>
      </StackPage>
    </>
  )
}
