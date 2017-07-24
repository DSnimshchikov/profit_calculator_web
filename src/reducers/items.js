import {ADD_DEPOSIT_SETTING} from '../actions/const';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_DEPOSIT_SETTING:
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos
