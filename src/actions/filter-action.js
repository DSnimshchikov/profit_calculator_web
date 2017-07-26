import fetch from 'isomorphic-fetch'
import {FILTER_PRODUCT, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCESS, FETCH_PRODUCT_ERROR} from './const';

export const filterProducts = (payload) => ({
  type: FILTER_PRODUCT,
  payload
});

export function fetchProductSuccess(payload) {
  return {type: FETCH_PRODUCT_SUCESS, payload};
}
function fetchProductError(payload) {
  return {type: FETCH_PRODUCT_ERROR, payload};
}

function fetchProductRequest(payload) {
  return {type: FETCH_PRODUCT_REQUEST, payload};
}

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export function loadProducts(filter) {
  return (dispatch) => {
    dispatch(fetchProductRequest(filter))
    fetchProducts(filter, dispatch)
  }
}

function fetchProducts(param, dispatch) {
  fetch('http://localhost:8080/products', {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => dispatch(fetchProductSuccess(json)))
    .catch(function (error) {
      console.log('Request failed', error);
      dispatch(fetchProductError(error));
    });

  // return fetch('http://localhost:8080/products', {
  //   method: 'post',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({ param })
  // })
}

module.exports = {filterProducts, fetchProductSuccess, loadProducts};
