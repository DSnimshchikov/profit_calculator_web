import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './filter.cssmodule.less';

class FilterCheckField extends React.Component {
  render() {
    return (
      <div className="switch">
        <input id={`cmn-toggle-${this.props.name}`} className="cmn-toggle cmn-toggle-round" type="checkbox"
               defaultChecked={this.props.value} value={this.props.value} onChange={this.props.onChange}/>
        <label htmlFor={`cmn-toggle-${this.props.name}`}></label>
      </div>
    );
  }
}

export default cssmodules(FilterCheckField, styles);
