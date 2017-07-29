import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';

import items from '../reducers/items.js';
import filterReducer from './FilterReducer.js';
import settingReducer from './SettingReducer.js';

const reducers = {
  filterReducer,
  settingReducer,
  form: formReducer,
  items
};
const combined = combineReducers(reducers);
module.exports = combined;
