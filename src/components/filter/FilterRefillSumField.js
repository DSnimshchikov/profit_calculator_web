import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './filter.cssmodule.less';

class FilterRefillSumField extends React.Component {
  render() {
    return (
      <div className="b-deposits-calculator--field">
        <label className="b-deposits-calculator--label">Ежемесячное пополнение</label>
        <div className="e-range b-deposits-calculator--term">
          <div className="e-range--field">
            <input type="text" name="refillSum" value={this.props.refillSum} ref='refillSum' onChange={this.props.handleChange}
                   className="e-range--field--entity"/>
            <span className="e-range--field--handler" data-range-handler="true"></span>
            <span className="e-range--field--filling" data-range-filling="true"></span>
            <span className="e-range--field--scale" data-range-scale="true"></span>
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

export default cssmodules(FilterRefillSumField, styles);
