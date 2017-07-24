import fetch from 'isomorphic-fetch'
import { FILTER_PRODUCT, FETCH_PRODUCT_LOADING, FETCH_PRODUCT_SUCESS, FETCH_PRODUCT_ERROR } from './const';

export const filterProducts = (parameter) => ({
  type: FILTER_PRODUCT,
  parameter
});

export  function fetchProductSuccess(parameter) {
  return { type: FETCH_PRODUCT_SUCESS, parameter };
}
function fetchProductError(parameter) {
  return { type: FETCH_PRODUCT_ERROR, parameter };
}

function action(parameter) {
  return { type: FETCH_PRODUCT_LOADING, parameter };
}

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

module.exports = {filterProducts, fetchProductSuccess};
