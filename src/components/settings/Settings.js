import React from 'react'
import cssmodules from 'react-css-modules'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import PropTypes from 'prop-types'

import SettingsContainer from './SettingsContainer'
import styles from './setting.cssmodule.less'
import {clearInfos, clearErrors} from '../../actions/messages-action'
import {ErrorBanner, InfoBanner} from '../message/MessageComponents'


class Settings extends React.Component {

  render() {
    return (
      <div>
        <InfoBanner info={this.props.infos[0]} closeAction={this.props.clearInfos}/>
        <ErrorBanner error={this.props.errors[0]} closeAction={this.props.clearErrors}/>
        <SettingsContainer/>
      </div>
    )
  }
}

Settings.displayName = 'Settings'
Settings.propTypes = {
  clearInfos: PropTypes.func,
  clearErrors: PropTypes.func,
  infos: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  errors: PropTypes.func,
}
Settings.defaultProps = {}
function mapDispatchToProps(dispatch) {
  return {
    clearInfos: bindActionCreators(clearInfos, dispatch),
    clearErrors: bindActionCreators(clearErrors, dispatch),
  }
}

function mapStateToProps(state) {

  return {
    infos: state.messageReducer.infos,
    errors: state.messageReducer.errors,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(cssmodules(Settings, styles))
