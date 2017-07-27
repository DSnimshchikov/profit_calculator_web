import { combineReducers } from 'redux';
import items from '../reducers/items.js';
import filterReducer from './FilterReducer.js';
import settingReducer from './SettingReducer.js';
import {reducer as formReducer} from 'redux-form';

const reducers = {
  filterReducer,
  settingReducer,
  'form': formReducer,
  items
};
const combined = combineReducers(reducers);
module.exports = combined;
