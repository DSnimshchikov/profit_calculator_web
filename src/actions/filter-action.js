import fetch from 'isomorphic-fetch'
import * as ctx from './const';

export const filterProducts = (payload) => ({
  type: ctx.FILTER_PRODUCT,
  payload
});

export function fetchFilterSuccess(payload) {
  return {type: ctx.FETCH_FILTER_SUCESS, payload};
}

export function fetchFilterError(payload) {
  return {type: ctx.FETCH_FILTER_ERROR, payload};
}

export function fetchProductSuccess(payload) {
  return {type: ctx.FETCH_PRODUCT_SUCESS, payload};
}

function fetchProductError(payload) {
  return {type: ctx.FETCH_PRODUCT_ERROR, payload};
}

function fetchProductRequest(payload) {
  return {type: ctx.FETCH_PRODUCT_REQUEST, payload};
}

function fetchFilterRequest(payload) {
  return {type: ctx.FETCH_FILTER_REQUEST, payload};
}

function updateFilterForm(payload) {
  let meta = {
    form: 'filter'
  }
  return {type: '@@redux-form/CHANGE', payload};
}

export function loadFilter(filter) {
  return (dispatch) => {
    dispatch(fetchFilterRequest(filter))
    fetchFilter(filter, dispatch)
  }
}

export function loadProducts(filter) {
  return (dispatch) => {
    fetchProducts(filter, dispatch)
  }
}

var postRequest = function (url, param) {
  return fetch(ctx.BASE_PATH + url, {
    method: ctx.HTTP_METHOD_POST,
    headers: ctx.HEADERS,
    body: JSON.stringify(param)
  });
};

function fetchProducts(filter, dispatch) {
  dispatch(fetchProductRequest(filter))
  var param = Object.assign({}, filter);
  if (param.daysCount >= ctx.PERIOD_DAYS_MIN && param.daysCount <= ctx.PERIOD_DAYS_MAX) {
    if (!param.refill) {
      param.monthRefillSum = 0;
    }
    postRequest('/products', param)
      .then(response => response.json())
      .then(json => dispatch(fetchProductSuccess(json)))
      .then(json => dispatch(fetchProductSuccess(json)))
      .catch(function (error) {
        dispatch(fetchProductError(error));
      });
  }
}

function fetchFilter(paramFromAction, dispatch) {
  var param = Object.assign({}, paramFromAction);
    postRequest('/filters', param)
      .then(response => response.json())
      .then(json => dispatch(fetchFilterSuccess(json)))
      .then(json => fetchProducts(json.payload, dispatch))
      .catch(function (error) {
        dispatch(fetchFilterError(error));
      });
}

module.exports = {filterProducts, fetchProductSuccess, loadProducts, loadFilter};
