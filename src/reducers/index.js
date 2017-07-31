import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'
import items from '../reducers/items.js'
import filterReducer from './FilterReducer.js'
import settingReducer from './SettingReducer.js'
import messageReducer from './MessagesReducer.js'

const reducers = {
  filterReducer,
  settingReducer,
  messageReducer,
  form: formReducer,
  items
}
const combined = combineReducers(reducers)
module.exports = combined
