import React from 'react';
import cssmodules from 'react-css-modules';
import {connect} from 'react-redux';

import SettingsContainer from './SettingsContainer';
import styles from './setting.cssmodule.less';


class Settings extends React.Component {


  render() {
    return (
      <div>
        {this.props.infos && this.props.infos.length &&
        alert(this.props.infos)
        }
        <SettingsContainer/>
      </div>
    );
  }
}

Settings.displayName = 'Settings';
Settings.propTypes = {
};
Settings.defaultProps = {};

export default connect(
  state => ({
    infos: state.messageReducer.infos,
  })
)(cssmodules(Settings, styles))
