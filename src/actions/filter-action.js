import fetch from 'isomorphic-fetch'
import * as ctx from './const';

export const filterProducts = (payload) => ({
  type: ctx.FILTER_PRODUCT,
  payload
});

export function fetchProductSuccess(payload) {
  return {type: ctx.FETCH_PRODUCT_SUCESS, payload};
}
function fetchProductError(payload) {
  return {type: ctx.FETCH_PRODUCT_ERROR, payload};
}

function fetchProductRequest(payload) {
  return {type: ctx.FETCH_PRODUCT_REQUEST, payload};
}

export function loadProducts(filter) {
  return (dispatch) => {
    dispatch(fetchProductRequest(filter))
    fetchProducts(filter, dispatch)
  }
}

function fetchProducts(param, dispatch) {
  if (param.daysCount > 91 && param.daysCount < 1831) { //todo normalize redux-form
    fetch(ctx.BASE_PATH + '/products', {
      method: ctx.HTTP_METHOD_POST,
      headers: ctx.HEADERS,
      body: JSON.stringify(param)
    })
      .then(response => response.json())
      .then(json => dispatch(fetchProductSuccess(json)))
      .catch(function (error) {
        console.log('Request failed', error);
        dispatch(fetchProductError(error));
      });
  }

}

module.exports = {filterProducts, fetchProductSuccess, loadProducts};
