/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
import chooseBestSolution from '../actions/chooseBestSolution.js';
import filter from './filter-action.js';

const actions = {
  filter,
  chooseBestSolution
};
module.exports = actions;
