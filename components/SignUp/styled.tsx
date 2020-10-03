import styled from 'styled-components/native';
import { TouchableOpacity, TextInput } from 'react-native';
import Colors from '../../Colors';

export const ButtonContainer = styled.TouchableOpacity`
  justifyContent: space-between;
  alignItems: center;
  flexDirection: row;
`;
export const UserButton = styled.TouchableOpacity`
  height: 19px;
  marginTop: 20px;
  alignSelf: center;
`;
export const MerchantButton = styled.TouchableOpacity`
  height: 19px;
  marginTop: 20px;
  alignSelf: center;
`;
export const HaveAccountTitle = styled.Text`
  fontSize: 16px;
  alignSelf: center;
  justifyContent: center;
  marginTop: 15px;
`;

export const SigninButton = styled.TouchableOpacity`
  height: 50px;
  alignSelf: center
`;
export const SigninTitle = styled.Text`
  fontSize: 16px;
  fontWeight: bold;
  color: ${Colors.secondary}
`;
export const TextArea = styled.TextInput`
  border: 1px ${Colors.border};
  paddingVertical: 0;
  fontSize: 20px;
  fontWeight: bold;
  marginBottom: 0px;
  height: 100px;
  color: ${props => props.error ? Colors.error : props.disabled ? Colors.InputLabel : 'black'};
  paddingLeft:10px
`;
export const Container = styled.View`
  paddingHorizontal:25px;
  justifyContent:center;
  paddingTop:35px
`;
