
export function loadCategories() {
  return (dispatch, getState) => {
    const state = getState();
    const tokens = state.token
    return dispatch({
      type: ['CATEGORY', 'CATEGORY_SUCCESS', 'CATEGORY_ERROR'],
      payload: {
        request: {
          url: '/categories',
          headers: {
            'Authorization': 'Bearer' + `${tokens}`
          },
        },
      }
    })
  }
}
export function getBrands(data) {
  return (dispatch, getState) => {
    const state = getState();
    const token = state.auth.token.token;
    return dispatch({
      type: ['BRAND', 'BRAND_SUCCESS', 'BRAND_ERROR'],
      payload: {
        request: {
          url: '/brands',
          headers: {
            'Authorization': 'Bearer ' + token
          },
        },
        data: { data }
      }
    })
  }
}

export function getPromotions() {
  return (dispatch, getState) => {
    const state = getState();
    const tokens = state.token
    return dispatch({
      type: ['PROMOTION', 'PROMOTION_SUCCESS', 'PROMOTION_ERROR'],
      payload: {
        request: {
          url: '/promotions',
          headers: {
            'Authorization': `Bearer ${tokens}`
          },
        },
      }
    })
  }
}
export function toggleFavorite(id) {
  return {
    type: 'TOGGLE_FAVORITE',
    promotionId: id

  }
}
