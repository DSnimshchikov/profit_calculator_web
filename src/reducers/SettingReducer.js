import * as ActionType from '../actions/const';

const initialState = {
  settings: {
    deposits: [],
    cards: [],
    savingAccounts: []
  }
};

function SettingReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.FETCH_SETTINGS_DEPOSIT_REQUEST:
    case ActionType.FETCH_SETTINGS_CARD_REQUEST:
    case ActionType.FETCH_SETTINGS_SAVING_ACCOUNT_REQUEST : {
      return {...state, fetching: true};
    }
    case ActionType.FETCH_SETTINGS_DEPOSIT_SUCCESS: {
      const settings = Object.assign({}, state.settings);
      settings.deposits = action.payload;
      return {...state, settings, fetching: false};
    }
    case ActionType.FETCH_SETTINGS_CARD_SUCCESS: {
      const settings = Object.assign({}, state.settings);
      settings.cards = action.payload;
      return {...state, settings, fetching: false};
    }
    case ActionType.FETCH_SETTINGS_SAVING_ACCOUNT_SUCCESS: {
      const settings = Object.assign({}, state.settings);
      settings.savingAccounts = action.payload;
      return {...state, settings, fetching: false};
    }
    case ActionType.FETCH_SETTINGS_DEPOSIT_ERROR:
    case ActionType.FETCH_SETTINGS_CARD_ERROR:
    case ActionType.FETCH_SETTINGS_SAVING_ACCOUNT_ERROR: {
      console.log(`load settings ERROR  ${action.payload}`);
      return {...state,
        settings: {
          deposits: [],
          cards: [],
          savingAccounts: []
        },
        fetching: false};
    }
    default: {
      return state;
    }
  }
}

module.exports = SettingReducer;
