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
    default: {
      return state;
    }
  }
}

module.exports = MessageReducer;
