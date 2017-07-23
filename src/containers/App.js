/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  filter,
  chooseBestSolution
} from '../actions/';
import Main from '../components/App';

class App extends Component {
  render() {
    const {actions, filterReducer, items} = this.props;
    return <Main actions={actions} filterReducer={filterReducer} items={items}/>;
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.shape({
    filter: PropTypes.func.isRequired,
    chooseBestSolution: PropTypes.func.isRequired
  }),
  filterReducer: PropTypes.shape({}),
  items: PropTypes.shape({})
};
function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  const props = {
    filterReducer: state.filterReducer,
    items: state.items
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  const actions = {
    filter,
    chooseBestSolution
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
