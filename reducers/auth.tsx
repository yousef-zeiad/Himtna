import { AnyAction } from 'redux';
import AsyncStorage from "@react-native-community/async-storage";

const initialState = {
  user: {},
  existingNumber: null,
  isLoading: false,
  token: null
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'SIGNUP':
      return {
        ...state,
        isLoading: true
      }
    case 'SIGNUP_SUCCESS':
      alert(action?.payload?.data?.message)
      return {
        ...state,
        isLoading: false,
      }
    case 'SIGNUP_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.errors
      }
    case 'SET_TOKENS':
      console.log(action.payload, "tokrnnn")
      return {
        ...state,
        token: action.payload
      }
    case 'SET_MERCHANT':
      console.log(action.payload, "mmmm")
      return {
        ...state,
        is_merchant: action.payload
      }
    case 'LOGIN':
      return {
        ...state,
        isLoading: true,
      }
    case 'LOGIN_SUCCESS':
      AsyncStorage.setItem('token', JSON.stringify(action.payload.data.data.token));
      AsyncStorage.setItem('is_merchant', JSON.stringify(action.payload.data.data.is_merchant));
      return {
        ...state,
        isLoading: false,
        is_merchant: action.payload.data.data.is_merchant
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    case 'SET_CURRENT_NUMBER':
      return {
        ...state,
        existingNumber: action.payload
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      }
    case 'LOGOUT':
      AsyncStorage.clear()
      return {
        ...initialState
      }
    default:
      return state
  }
}

export interface Interface {
  existingNumber: typeof initialState.existingNumber,
  user: typeof initialState.user,
}
