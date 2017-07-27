import chooseBestSolution from '../actions/chooseBestSolution.js';
import {filterProducts, fetchProductSuccess, loadProducts} from './filter-action.js';

const actions = {
  filterProducts, fetchProductSuccess, loadProducts,
  chooseBestSolution
};

module.exports = actions;
