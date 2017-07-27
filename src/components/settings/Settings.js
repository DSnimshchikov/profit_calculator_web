import React from 'react';
import cssmodules from 'react-css-modules';

import SettingsContainer from './SettingsContainer';
import styles from './setting.cssmodule.less';


class Settings extends React.Component {


  render() {
    return (
      <div>
        <SettingsContainer/>
      </div>
    );
  }
}

Settings.displayName = 'Settings';
Settings.propTypes = {
};
Settings.defaultProps = {};

export default cssmodules(Settings, styles);
