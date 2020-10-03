import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, StatusBar, Platform, KeyboardAvoidingView, View, ActivityIndicator, ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image';
import { SafeAreaView } from 'react-navigation';
import Colors from '../../Colors';
import { useHeaderHeight } from 'react-navigation-stack';
// paddingHorizontal: 35
export const Body = ({ children, ...props }) => (
  <BodyStyle showsVerticalScrollIndicator={false}  {...props}>
    {children}
  </BodyStyle>
);
export const BodyStyle = styled(ScrollView)`
  flex: 1;
  borderTopRightRadius: 25px;
  borderTopLeftRadius: 25px;
  ${Platform.select({
  ios: { backgroundColor: 'white' }, android: {
    backgroundColor: 'white'
  }
})};
`;
export const Title = styled.Text`
  justifyContent:center;
  alignSelf:flex-start;
  color: ${Colors.secondary};
  fontSize: ${props => props.fontSize || 32}px;
  fontWeight: bold;
  lineHeight: ${props => props.noMargin ? 0 : 40}px;
  marginBottom: 0px;
  marginTop: ${props => props.noMargin ? 0 : 10}px;
`;
const ButtonWrapper = styled.TouchableOpacity`
  width: 100%;
  height: 45px;
  backgroundColor: ${(props) => props.disabled ? Colors.placeholder : (props.color || Colors.primary)};
  justifyContent: center;
  alignItems: center;
  borderRadius: 22.5px;
  shadowColor:  ${(props) => props.disabled ? Colors.placeholder : (props.color || Colors.primary)};
  shadowRadius: 5px;
  shadowOpacity: .4;
  elevation: 1;
  alignSelf: center;
  shadowOffset: 0px 2px;
`;
export const Button = props => <ButtonWrapper {...props} disabled={props.disabled || props.loading}>
  {props.loading && <ActivityIndicator color={Colors.white} />}
  {!props.loading && props.children}
</ButtonWrapper>;
export const ButtonText = styled.Text`
  color: ${({ color }) => color || Colors.white};
  fontSize: 17px;
  fontWeight: bold;
`;
export const ButtonsContainer = styled.View`
  justifyContent: space-between;
  marginBottom: ${Platform.select({ ios: 15, android: 40 })}px;
  marginTop: 20px;
  width: 100%;
  maxWidth: 300px;
  alignItems: ${props => !props.starting ? 'center' : 'flex-start'};
  alignSelf: ${props => !props.starting ? 'center' : 'flex-start'};
`;
export const SecondaryButton = styled.TouchableOpacity`
  height: 19px;
  marginTop: 20px;
  alignSelf: ${props => props.center ? 'center' : 'flex-start'};
`;
export const SecondaryButtonText = styled.Text`
  color: ${props => props.grey ? Colors.InputLabel : Colors.primary};
  fontSize: 14px;
  fontWeight: bold;
`;
export const Container = styled.View`
  flex: 1;
  justifyContent: space-between;
  alignItems: center;
  backgroundColor: ${Colors.white};
  width: 100%;
`;
const SafeViewContent = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  backgroundColor: ${Colors.secondary};
  paddingTop: 1px;
  paddingHorizontal: ${props => !isNaN(props.paddingHorizontal) ? props.paddingHorizontal : 0}px;
`;
export const SafeView = props => <SafeViewContent {...props} forceInset={{ top: 'always' }} />;
export const LogoContainer = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
  width: 100%;
  paddingLeft: 35px;
  paddingTop: 40px;
  paddingRight: 35px;
  backgroundColor: ${Colors.white};
`;
export const Logo = styled(FastImage)`
  width: 30px;
  height: 30px;
`;
export const InputLabel = styled.Text`
  color: ${Colors.InputLabel};
  fontSize: 14px;
  marginBottom: 10px;
  marginTop: 40px;
`;
export const TextInput = styled.TextInput`
  borderBottomColor: rgb(219,219,219);
  borderBottomWidth: 1px;
  paddingVertical: 0;
  fontSize: 14px;
  marginBottom: 0px;
  height: 40px;
  color: ${props => props.error ? Colors.error : props.disabled ? Colors.InputLabel : 'black'}
`;
export const ErrorText = styled.Text`
  color: ${Colors.error};
  fontSize: 12px;
`;
export const StackPage = ({ children, paddingHorizontal, showStatusBar }: { children, paddingHorizontal?, showStatusBar?}) => (
  <Container>
    {!showStatusBar && <StatusBar barStyle={'light-content'} />}
    <SafeView paddingHorizontal={paddingHorizontal}>
      {children}
    </SafeView>
  </Container>
);
export const CloseButton = ({ navigation, onPress, style = {} }) => <>
  <TouchableOpacity onPress={onPress ? onPress : () => navigation.popClose()} style={{ width: 25, ...style }}>
    <MoveToIcon
      source={require('./../../assets/close.png')}
      resizeMode={FastImage.resizeMode.contain}
      large
    />
  </TouchableOpacity>
</>;
export const Header = props => (
  <>
    <LogoContainer>
      <Logo
        source={require('../../assets/close.png')}
        resizeMode={FastImage.resizeMode.contain}
        tintColor={Colors.primary}
      />
      <CloseButton {...props} />
    </LogoContainer>
  </>
);
export const KeyboardView = ({ children, style = {} }) => {
  const KEYBOARD_VERTICAL_OFFSET = useHeaderHeight();
  return (
    <KeyboardAvoidingView behavior='padding'
      enabled style={{ ...style, flex: 1, width: '100%' }}
      keyboardVerticalOffset={KEYBOARD_VERTICAL_OFFSET}
      children={children}
    />
  )
};
const SheetTabContainer = ({ children }) => <View style={{ height: 70 }}>
  <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
    height: 69,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 19,
    overflow: 'hidden'
  }}>
    {children}
  </ScrollView>
  <View style={{ borderBottomColor: 'rgb(230,230,230)', borderBottomWidth: 1 }} />
</View>;
const SheetTabItem = styled.TouchableOpacity`
  padding: 7px 12px;
  background: ${props => props.selected ? props.backgroundColor : Colors.white};
  borderRadius: 17px;
  margin: 0px 4px;
`;
const SheetTabItemText = styled.Text`
  color: ${props => props.selected ? Colors.white : Colors.secondaryGrey};
  fontSize: 14px;
  fontWeight: bold;
`;
export const SheetTabs = ({ pages, currentPage, setCurrentPage, backgroundColor }) => {
  return (
    <SheetTabContainer>
      {pages.map((page, i) => <SheetTabItem
        key={i}
        onPress={() => setCurrentPage(i)}
        selected={currentPage === i}
        backgroundColor={backgroundColor || Colors.primary}
      >
        <SheetTabItemText selected={currentPage === i}>
          {page}
        </SheetTabItemText>
      </SheetTabItem>
      )}
    </SheetTabContainer>
  )
}

const TitleFirstAreaContainer = styled.View`
  flexDirection: row;
  justifyContent: space-between;
`;
const TitleText = styled.Text`
  fontSize: 20px;
  fontWeight: bold; 
  flex: 1;
`;
const MoveToIcon = styled(FastImage)`
  height: ${props => props.large ? 25 : 20}px;
  width: ${props => props.large ? 25 : 20}px;
`;
const SubTitleText = styled.Text`
  fontSize: 16px;
  fontWeight: bold;
  paddingTop: 10px;
  color: rgb(27,152,153);
`;
const TitleTouchableContainer = styled.View`
  flexDirection: row; 
  alignItems: center; 
  justifyContent: center;
  flex: 1;
`;
export const NavigatorTitle = ({ title, subTitle, moveTo, backTo, size: any }: any) => <>
  <TouchableOpacity onPress={moveTo || backTo}>
    <TitleFirstAreaContainer>
      <TitleTouchableContainer>
        {!!backTo &&
          <MoveToIcon
            source={require('./../../assets/back.png')}
            resizeMode={FastImage.resizeMode.contain}
          />}
        <TitleText>{title}</TitleText>
        {!!moveTo &&
          <MoveToIcon
            source={require('./../../assets/moveTo.png')}
            resizeMode={FastImage.resizeMode.contain}
          />}
      </TitleTouchableContainer>
    </TitleFirstAreaContainer>
    {!!subTitle && <SubTitleText>{subTitle}</SubTitleText>}
  </TouchableOpacity>
</>;


const ViewMoreContainer = styled.TouchableOpacity`
  padding: 5px;
  backgroundColor: ${Colors.grey};
  borderRadius: 20px;
`;

const ViewMoreImage = styled(FastImage)`
  height: 20px;
  width: 20px;
`;
export const ViewMore = ({ onPress }) => <>
  <ViewMoreContainer onPress={onPress}>
    <ViewMoreImage
      source={require('../../assets/close.png')}
      resizeMode={FastImage.resizeMode.contain}
    />
  </ViewMoreContainer>
</>;

export const Divider = styled.View`
  backgroundColor: ${Colors.grey};
  height: 2px;
`;
