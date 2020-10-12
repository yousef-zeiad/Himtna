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
import { View, TouchableOpacity, ActivityIndicator, RefreshControl } from 'react-native';
import { SafeView } from '../AuthLoading/styled';
const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}
export default function Home({ navigation, refetchBranches }) {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(200).then(() => setRefreshing(false));
  }, []);
  const dispatch = useDispatch();
  const toggleFav = navigation.getParam('toggleFav');
  const [categories, setCategories] = useState([]);
  const [promotions, setProm] = useState([]);
  const [brands, setBrand] = useState([]);
  const [currentCategoryId, setCurrentCategoryId] = useState()
  const { is_merchant } = useSelector(state => state.auth)

  useEffect(() => {
    const fetchData = async () => {
      const result = await dispatch(actions.main.loadCategories());
      setCategories(result.payload.data.data);
    }
    fetchData()
  }, [setCategories]);

  useEffect(() => {
    const fetchPromotion = async () => {
      const result = await dispatch(actions.main.getPromotions());
      setProm(result.payload.data.data);
    }
    fetchPromotion()
  }, [setProm]);

  useEffect(() => {
    const fetchBrand = async () => {
      const result = await dispatch(actions.main.getBrands());
      setBrand(result.payload.data.data);
      console.log(result.payload.data.data, "Brands")
    }
    fetchBrand()
  }, [setBrand]);


  const getBrands = (categoryId) => {
    setCurrentCategoryId(categoryId)
  };
  return (
    <>
      <Header navigation={navigation} />
      <StackPage>
        <Body nestedScrollEnabled={true} refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
          <Search navigation={navigation} />
          {promotions ? <PromotionList horizontal contentContainerStyle={{}} showsHorizontalScrollIndicator={false}>
            {promotions.map(promotion =>
              <PromotionTile key={promotion.id} promotion={promotion} navigation={navigation} onPress={() => { }} />
            )}
          </PromotionList> : <SafeView forceInset={{ top: 'always' }}>
              {<ActivityIndicator />}
            </SafeView>}

          <Container>
            {<ButtonContainer>
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
            {<CategoriesList bounces horizontal contentContainerStyle={{ paddingLeft: 20 }} showsHorizontalScrollIndicator={false}>
              {categories.map(category =>
                <CategoryTile
                  category={category} key={category.id}
                  onPress={() => { getBrands(category.id) }}
                  selected={category.id === category} />)}
            </CategoriesList>}
            <Title fontSize={16} style={{ paddingLeft: 25 }}>
              All
            </Title>
            {<BrandsList
              horizontal={false}
              numColumns={2}
              data={brands.filter(brand => brand.category_id === currentCategoryId)}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (<PromotionOffers brands={item} key={item.id}
                navigation={navigation}
                onPress={() => navigation.push('BrandDetailsPage', { brand: item, promotions, is_merchant })} />)}
              onEndReachedThreshold={8}
              contentContainerStyle={{ justifyContent: 'center', alignSelf: 'center' }}
              nestedScrollEnabled={true}
            />}
          </Container>
        </Body>
      </StackPage>
    </>
  )
}
