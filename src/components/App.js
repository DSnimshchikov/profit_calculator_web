import React from 'react';
import YeomanImage from './YeomanImage';
import Filter from './Filter'
import Product from './ru/tn/components/Product'
import './app.css';
// import '../styles/vtb_site.css';

class AppComponent extends React.Component {

  render() {
    return (
      <div>
        <div className="index">
          <Filter/>
        </div>
        <div className="index" >
          <Product/>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
