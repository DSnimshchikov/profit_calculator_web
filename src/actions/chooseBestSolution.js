import { CHOOSE_BEST_SOLUTION } from './const';

function action(parameter) {
  return { type: CHOOSE_BEST_SOLUTION, parameter };
}

module.exports = action;
