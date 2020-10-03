import styled from 'styled-components/native';
import { SafeAreaView } from 'react-navigation';
import FastImage from 'react-native-fast-image';
import Colors from '../../Colors';

export const Container = styled(SafeAreaView)`
  flex: 1;
  paddingTop: 15px;
  paddingBottom: 15px;
  width: 100%;
  backgroundColor: ${Colors.white};
  paddingHorizontal: 35px;
`;
export const SearchContainer = styled.View`
  shadowColor: #000;
  shadowOffset:1px;
  shadowOpacity: 0.22;
  shadowRadius: 10px;
  elevation: 3;
  backgroundColor: ${Colors.white};
  borderRadius: 20px;
  alignSelf: center;
`;
export const Row = styled.View`
  flexDirection: row;
  alignItems: center;
  justifyContent: space-between;
  width: 100%;
  paddingHorizontal: 10px;
`;
export const InputContainer = styled.View`
  flexDirection: row;
  alignItems: center;
  justifyContent: space-between;

`;
export const Input = styled.TextInput`
  flex: 1;
  color: ${Colors.black};
  paddingHorizontal: 10px;
  fontSize: 14px;
  paddingVertical:14px;
`;
export const SearchButton = styled.TouchableOpacity`
  height: 35px;
  width: 35px;
  borderRadius: 13.5px;
`;
export const ButtonIcon = styled(FastImage)`
  height: 30px;
  width: 20px;
`;
