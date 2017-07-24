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
import * as AllActions from '../actions'
import Main from '../components/App';

class App extends Component {
  render() {
    const {actions, filterReducer} = this.props;
    return <Main actions={actions} filterReducer={filterReducer} />;
  }
}
App.propTypes = {
  actions: PropTypes.shape({
    chooseBestSolution: PropTypes.func.isRequired
  }),
  filterReducer: PropTypes.shape({})
};
function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  const props = {
    filterReducer: state.filterReducer
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  const actionMap = { actions: bindActionCreators(AllActions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
