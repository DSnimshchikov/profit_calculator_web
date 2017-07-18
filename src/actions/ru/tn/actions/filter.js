import { FILTER } from './../../../const';

function action(parameter) {
  return { type: FILTER, parameter };
}

module.exports = action;
