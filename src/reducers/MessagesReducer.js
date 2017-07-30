import * as ActionType from '../actions/const';

const initialState = {
  errors: [],
  warnings: [],
  infos: []
};

function MessageReducer(state = initialState, action) {
  switch (action.type) {

    case ActionType.ADD_INFO: {
      const infos = [];
      infos.push(action.payload);
      return {...state, infos};
    }
    case ActionType.CLEAR_INFOS: {
      const infos = [];
      return {...state, infos};
    }

    case ActionType.ADD_ERROR: {
      const errors = [];
      errors.push(action.payload);
      return {...state, errors};
    }
    case ActionType.CLEAR_ERRORS: {
      const errors = [];
      return {...state, errors};
    }
    default: {
      return state;
    }
  }
}

module.exports = MessageReducer;
