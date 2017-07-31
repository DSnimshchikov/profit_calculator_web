import * as ActionType from '../actions/const'

const initialState = {
  productList: []
}

function setState(state, newState) {
  return Object.assign({}, state, newState) // init new state with newState
}

function FilterReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.FILTER_PRODUCT: {
      return fetchProducts(action.payload)
    }
    case ActionType.FETCH_PRODUCT_REQUEST : {
      return {...state, filter: action.payload, fetching: true}
    }
    case ActionType.FETCH_PRODUCT_SUCESS: {
      return {...state, productList: action.payload, fetching: false}
    }
    case ActionType.FETCH_PRODUCT_ERROR: {
      return {...state, productList: [], fetching: false}
    }
    case ActionType.FETCH_FILTER_SUCESS: {
      return {...state, filter: action.payload, fetching: false}
    }
    case ActionType.FETCH_FILTER_ERROR: {
      return {...state, filter: [], fetching: false}
    }
    default: {
      return state
    }
  }
}

module.exports = FilterReducer
