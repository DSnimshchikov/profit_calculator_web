import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './filter.cssmodule.less';

class Filter extends React.Component {

  render() {
    return (
      <div className="filter-component" styleName="filter-component">
        Please edit src/components/ru/tn/components/Filter.js to update this component!
      </div>
    );
  }
}

Filter.displayName = 'RuTnComponentsFilter';
Filter.propTypes = {};
Filter.defaultProps = {};

export default cssmodules(Filter, styles);
