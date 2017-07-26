import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './filter.cssmodule.less';

class FilterSumField extends React.Component {
  render() {
    return (
      <div className="b-deposits-calculator--field">
        <label className="b-deposits-calculator--label">Срок накопления</label>
        <div className="e-range b-deposits-calculator--term">
          <div className="e-range--field">
            <input type="text" className="e-range--field--entity" data-range-field="true"
                   value={this.props.period} onChange={this.props.handleChange}/>
            <span className="e-range--field--measure e-range--field--measure---default " data-range-measure="true">
                  <span className="e-range--field--measure--value" data-range-measure-value="true">дней</span></span>
            <span className="e-range--field--handler" data-range-handler="true"></span>
            <span className="e-range--field--filling" data-range-filling="true"></span>
            <span className="e-range--field--scale" data-range-scale="true"></span>
          </div>
          <ul className="e-range--markings" data-range-markings="true">
            <li className="e-range--markings--clause" data-range-markings-clause="true"
                data-range-markings-clause-value="91">3 мес.
            </li>
            <li className={`${styles['left-first']} e-range--markings--clause`} data-range-markings-clause="true"
                data-range-markings-clause-value="365" >1 год
            </li>
            <li className={`${styles['left-second']} e-range--markings--clause`} data-range-markings-clause="true"
                data-range-markings-clause-value="730" >2 года
            </li>
            <li className="e-range--markings--clause" data-range-markings-clause="true"
                data-range-markings-clause-value="1830">5 лет
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default cssmodules(FilterSumField, styles);
