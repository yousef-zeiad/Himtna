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
import { TouchableOpacity, ActivityIndicator, RefreshControl } from 'react-native';
import { SafeView } from '../AuthLoading/styled';
const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default function Home({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [promotions, setProm] = useState([]);
  const [brands, setBrand] = useState([]);
  const [currentCategoryId, setCurrentCategoryId] = useState()
  const { is_merchant } = useSelector(state => state.auth)
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(200).then(() => setRefreshing(false));
  }, []);


  useEffect(() => {
    const fetchCategories = async () => {
      const result = await dispatch(actions.main.loadCategories());
      setCategories(result.payload.data.data);
    }
    const fetchPromotion = async () => {
      const result = await dispatch(actions.main.getPromotions());
      setProm(result.payload.data.data);
    }
    const fetchBrand = async () => {
      const result = await dispatch(actions.main.getBrands());
      setBrand(result.payload.data.data);
    }
    fetchBrand()
    fetchPromotion()
    fetchCategories()
  }, [setCategories, setBrand, setProm]);

  const toggleBrands = (categoryId) => {
    setCurrentCategoryId(categoryId)
  };
  console.log(promotions.map(promotion => promotion.id), 'hhhhh')
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
              <PromotionTile key={promotion.id} promotion={promotion} navigation={navigation} onPress={() => { promotion }} />
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
              <TouchableOpacity onPress={() => console.log('toggleFav')}>
                <Title fontSize={16} style={{ color: '#c2c2c2' }}>
                  My Favorites
              </Title>
              </TouchableOpacity>
            </ButtonContainer>}
            {<CategoriesList bounces horizontal contentContainerStyle={{ paddingLeft: 20 }} showsHorizontalScrollIndicator={false}>
              {categories.map(category =>
                <CategoryTile
                  category={category} key={category.id}
                  onPress={() => { toggleBrands(category.id) }}
                  selected={category.id === currentCategoryId} />)}
            </CategoriesList>}
            <Title fontSize={16} style={{ paddingLeft: 25 }}>
              All
            </Title>
            {<BrandsList
              horizontal={false}
              numColumns={2}
              data={currentCategoryId ? brands.filter(brand => brand.category_id === currentCategoryId) : brands}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (<PromotionOffers brands={item} key={item.id}
                navigation={navigation}
                onPress={() => navigation.push('BrandDetailsPage', { brand: item, promotions, is_merchant })} />)}
              onEndReachedThreshold={.5}
              contentContainerStyle={{ justifyContent: 'center', alignSelf: 'center' }}
              nestedScrollEnabled={true}
            />}
          </Container>
        </Body>
      </StackPage>
    </>
  )
}
