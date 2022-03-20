import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../../actions';
import {Header} from './Header';
import {Body, StackPage} from '../Shared/Shared';
import Search from '../Search/Search';
import {
  PromotionTile,
  Title,
  Container,
  ButtonContainer,
  CategoryTile,
  PromotionOffers,
  CategoriesList,
  PromotionList,
  BrandsList,
} from './styled';
import {
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {SafeView} from '../AuthLoading/styled';
import localStorage from '../helpers/localSorage';

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export default function Home({navigation}) {
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [promotions, setProm] = useState([]);
  const [brands, setBrand] = useState([]);
  const [currentCategoryId, setCurrentCategoryId] = useState();
  const [merchant, setMerchant] = useState();
  const {is_merchant} = useSelector((state) => state.auth);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(200).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await dispatch(actions.main.loadCategories());
      setCategories(result.payload.data.data);
    };
    const fetchPromotion = async () => {
      const result = await dispatch(actions.main.getPromotions());
      setProm([result.payload.data.data]);
    };
    const fetchBrand = async () => {
      const result = await dispatch(actions.main.getBrands());
      setBrand(result.payload.data.data);
    };
    fetchBrand();
    fetchPromotion();
    fetchCategories();
  }, []);
  useEffect(() => {
    async function saveMerchant() {
      const merchant = await localStorage.get('is_merchant');
      console.log(merchant, 'merchantmerchant');
      dispatch(actions.auth.setMerchant(merchant));
      setMerchant(merchant);
    }
    saveMerchant();
  }, []);
  const toggleBrands = (categoryId) => {
    setCurrentCategoryId(categoryId);
  };

  return (
    <>
      <Header navigation={navigation} />
      <StackPage>
        <Body
          nestedScrollEnabled={true}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <Search navigation={navigation} />
          {merchant === 1 ? null : promotions ? (
            <PromotionList
              horizontal
              contentContainerStyle={{}}
              showsHorizontalScrollIndicator={false}>
              {promotions.map((promotion) => (
                <PromotionTile
                  key={promotion.id}
                  promotion={promotion}
                  navigation={navigation}
                  onPress={() => navigation.push('OfferDetails', {promotion})}
                />
              ))}
            </PromotionList>
          ) : (
            <SafeView forceInset={{top: 'always'}}>
              {<ActivityIndicator />}
            </SafeView>
          )}
          <Container>
            {merchant === 1 ? null : (
              <ButtonContainer>
                <Title fontSize={16}>All Offers</Title>
                <Title fontSize={16} style={{color: '#c2c2c2'}}>
                  Offers Near Me
                </Title>
                <TouchableOpacity onPress={() => console.log('toggleFav')}>
                  <Title fontSize={16} style={{color: '#c2c2c2'}}>
                    My Favorites
                  </Title>
                </TouchableOpacity>
              </ButtonContainer>
            )}
            {merchant === 1 ? null : (
              <CategoriesList
                bounces
                horizontal
                contentContainerStyle={{paddingLeft: 20}}
                showsHorizontalScrollIndicator={false}>
                {categories.map((category) => (
                  <CategoryTile
                    category={category}
                    key={category.id}
                    onPress={() => {
                      toggleBrands(category.id);
                    }}
                    selected={category.id === currentCategoryId}
                  />
                ))}
              </CategoriesList>
            )}
            <Title fontSize={16} style={{paddingLeft: 25}}>
              {merchant === 1 ? 'Merchant Brands' : 'All'}
            </Title>
            {
              <BrandsList
                horizontal={false}
                numColumns={2}
                data={
                  currentCategoryId
                    ? currentCategoryId === 20
                      ? brands
                      : brands.filter(
                          (brand) => brand.category_id === currentCategoryId,
                        )
                    : brands
                }
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                  <PromotionOffers
                    brands={item}
                    key={item.id}
                    navigation={navigation}
                    onPress={() =>
                      navigation.push('BrandDetailsPage', {
                        brand: item,
                        promotions,
                        is_merchant: merchant,
                      })
                    }
                  />
                )}
                onEndReachedThreshold={0.5}
                contentContainerStyle={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}
                nestedScrollEnabled={true}
              />
            }
          </Container>
        </Body>
      </StackPage>
    </>
  );
}
