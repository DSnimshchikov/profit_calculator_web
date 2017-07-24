import {FILTER_PRODUCT} from "../actions/const";
import {fetchProductSuccess} from "../actions/";

const initialState = {};

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  // const nextState = Object.assign({}, state);

  switch (action.type) {
    case FILTER_PRODUCT: {
      debugger;
      return fetchProducts(action.parameter);
    }
    default: {
      return state;
    }
  }
}


function fetchProducts(param) {
  return dispatch => {
    dispatch(filterProducts(param));

    return fetch('http://localhost:8080/products', { method: 'get' })
      .then(response => response.json())
      .then(json => dispatch(fetchProductSuccess(subreddit, json)))
      .catch(function (error) {
        console.log('Request failed', error);
      });
  }
}

module.exports = reducer;
