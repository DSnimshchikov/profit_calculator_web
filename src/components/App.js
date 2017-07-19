import React from 'react';
import YeomanImage from './YeomanImage';
import Filter from './Filter'
import './app.css';
// import '../styles/vtb_site.css';

class AppComponent extends React.Component {

  render() {
    return (
      <div>
        <div className="index">
          <Filter/>
        </div>
        <div className="index">
          Список подходящих продуктов
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
