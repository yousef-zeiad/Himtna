import localStorage from '../components/helpers/localSorage';


export const signup = ({ phone, name, email, is_merchant, description, store }) => {
  if (phone.slice(0, 2) === '07') {
    phone = '00962' + phone.slice(1)
  } else if (phone[0] === '7') {
    phone = '00962' + phone
  }
  phone = phone.replace('+', '00')
  return {
    types: ['SIGNUP', 'SIGNUP_SUCCESS', 'SIGNUP_FAILURE'],
    payload: {
      request: {
        url: `/register`,
        method: 'POST',
        headers: {
          'Contetn-Type': 'application/json'
        },
        data: is_merchant ? {
          mobile_number: phone,
          name: name,
          email: email,
          is_merchant: true,
          description: description,
          store: store
        } : {
            mobile_number: phone,
            name: name,
            email: email,
            is_merchant: false,
          }
      }
    }
  }
};

export const login = ({ phone, otp }) => {
  if (phone.slice(0, 2) === '07') {
    phone = '00962' + phone.slice(1)
  } else if (phone[0] === '7') {
    phone = '00962' + phone
  }
  phone = phone.replace('+', '00')

  return {
    types: ['LOGIN', 'LOGIN_SUCCESS', 'LOGIN_FAILURE'],
    payload: {
      request: {
        url: `/login`,
        method: 'POST',
        headers: {
          'Contetn-Type': 'application/json'
        },
        data: {
          mobile_number: phone,
          otp: otp,
        }
      }
    }
  }
};

export const setTokens = (token) => {
  return {
    type: 'SET_TOKENS',
    payload: {
      token
    }
  }
}

export const logout = ({ navigation }) => {
  localStorage.remove('token');
  // navigation.push('Auth');
  return {
    type: 'LOGOUT'
  }
};
