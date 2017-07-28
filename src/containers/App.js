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
    loadProducts: PropTypes.func.isRequired
  }),
  globalState: PropTypes.shape({})
};
function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  const props = {
    globalState: state.globalState
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  const actionMap = { actions: bindActionCreators(AllActions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
