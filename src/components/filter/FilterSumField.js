import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './filter.cssmodule.less';
import {Field, reduxForm} from 'redux-form'

class FilterSumField extends React.Component {
  render() {
    return (
        <div className="b-deposits-calculator--field">
          <label className="b-deposits-calculator--label">Сумма к накоплению</label>
          <div className="e-range b-deposits-calculator--deposit">
            <div className="e-range--field">
              <input type="text" className="e-range--field--entity"
                     value={this.props.sum} onChange={this.props.handleChange}
                     data-range-field="true"/>
              {/*<HorizontalSlider/>*/}
              <span
                className="e-range--field--measure e-range--field--measure---currency e-range--field--measure---multiple"
                data-range-measure="true">
                <span className="e-range--field--measure--value" data-range-measure-value="true">Р</span>
                <span className="e-range--field--measure--arrow"></span>
              </span>
              <span className="e-range--field--handler" data-range-handler="true"></span>
            </div>
            <ul className="e-range--markings" data-range-markings="true">
              <li className="e-range--markings--clause" data-range-markings-clause="true"
                  data-range-markings-clause-value="200000">200 тыс.
              </li>
              <li className={`${styles['left-third']} e-range--markings--clause`} data-range-markings-clause="true"
                  data-range-markings-clause-value="15000000">15 млн
              </li>
              <li className="e-range--markings--clause" data-range-markings-clause="true"
                  data-range-markings-clause-value="30000000">30 млн
              </li>
            </ul>
          </div>
        </div>
    );
  }
}

export default reduxForm({form: 'simple' })(cssmodules(FilterSumField, styles));
