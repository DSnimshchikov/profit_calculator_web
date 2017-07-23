import fetch from 'isomorphic-fetch'
import { FETCH_PRODUCT_LOADING, FETCH_PRODUCT_SUCESS, FETCH_PRODUCT_ERROR } from './const';

function fetchProductsLoading(parameter) {
  return { type: FETCH_PRODUCT_LOADING, parameter };
}
function fetchProductSuccess(parameter) {
  return { type: FETCH_PRODUCT_SUCESS, parameter };
}
function fetchProductError(parameter) {
  return { type: FETCH_PRODUCT_ERROR, parameter };
}

function fetchProducts(param) {
  return dispatch => {
    dispatch(fetchProductsLoading(param));

    return fetch('http://localhost:8080/products', { method: 'get' })
      .then(response => response.json())
      .then(json => dispatch(fetchProductSuccess(subreddit, json)))
      .catch(function (error) {
        console.log('Request failed', error);
      });
  }
}

export function fetchPostsIfNeeded(subreddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit))
    }
  }
}
