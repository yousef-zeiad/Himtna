import React, { useState, useEffect } from 'react';
import { ScrollView, Keyboard } from 'react-native';
import FastImage from 'react-native-fast-image';

import { Title, CloseButton } from '../Shared/Shared';
import { Container, InputContainer, Input, SearchButton, ButtonIcon, Row, SearchContainer } from './styled';

export default function Search({ navigation }) {
  useEffect(() => { navigation.popClose = () => navigation.dismiss(); }, [navigation]);
  const [searchTerm, setSearchTerm] = useState('');

  const onSearch = () => {
    Keyboard.dismiss();
    if (searchTerm.trim().length > 2) {

    }
  };

  const onBranchPress = branch => {
    navigation.pop();
    navigation.push('', {})
  };

  return <Container forceInset={{ top: 'never' }}>
    <SearchContainer>
      <Row>
        <InputContainer>
          <Input
            onChangeText={setSearchTerm} value={searchTerm}
            maxLength={40} autoFocus onSubmitEditing={onSearch}
            placeholder={'Search for offers'}
            autoFocus={false} returnKeyType={'search'}
          />
        </InputContainer>
        <SearchButton onPress={onSearch}>
          <ButtonIcon
            source={require('../../assets/search.png')}
            resizeMode={FastImage.resizeMode.contain}
          />
        </SearchButton>
      </Row>
    </SearchContainer>
    <ScrollView scrollEventThrottle={16} overScrollMode={'never'}>
      {/* {loading && <ActivityIndicator />}
      {branches.map(branch => <BranchTile
        onPress={onBranchPress} branch={branch} key={branch.id} />
      )} */}
    </ScrollView>
  </Container>
}
