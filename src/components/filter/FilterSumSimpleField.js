import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './filter.cssmodule.less';

class FilterSumSimpleField extends React.Component {
  render() {
    return (
      <div className="e-range--field top-distance">
        <input type="text" id="Credit" name="expensesTrip"
               className="e-range--field--entity"
               ref="expensesTrip" value={this.props.value}
               onChange={this.props.onChange}
               data-range-field="true"/>
        <span className="e-range--field--measure e-range--field--measure---default " data-range-measure="true">
                  <span className="e-range--field--measure--value" data-range-measure-value="true">{this.props.caption}</span>
              </span>
      </div>
    );
  }
}

export default cssmodules(FilterSumSimpleField, styles);
