import chooseBestSolution from '../actions/chooseBestSolution.js';
import {filterProducts, fetchProductSuccess} from './filter-action.js';

const actions = {
  filterProducts, fetchProductSuccess,
  chooseBestSolution
};

module.exports = actions;
