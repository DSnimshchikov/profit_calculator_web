import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './filter.cssmodule.less';
import {Field} from 'redux-form'
import Slider from 'react-rangeslider'
import {DEPOSIT_REFILL_SUM_MIN, DEPOSIT_REFILL_SUM_MAX, DEPOSIT_REFILL_SUM_STEP} from '../../actions/const'

const FilterRefillSumField = (props) =>
  <Field name={props.name} type="number" component={renderField} forceSubmit={props.forceSubmit} label={props.label}/>;

const renderField = ({forceSubmit, input, label, type, meta: {touched, error, warning}}) =>
  <div className="b-deposits-calculator--field">
    <label className="b-deposits-calculator--label">{label}</label>
    <div className="e-range b-deposits-calculator--term">
      <div className="e-range--field">
        <input {...input} type={type} className="e-range--field--entity" data-range-field="true"/>
        <span className="e-range--field--measure e-range--field--measure---currency e-range--field--measure---multiple">
                <span className="e-range--field--measure--value" data-range-measure-value="true">Р</span>
            </span>
        <Slider min={DEPOSIT_REFILL_SUM_MIN} max={DEPOSIT_REFILL_SUM_MAX} step={DEPOSIT_REFILL_SUM_STEP}
                name={input.name} value={input.value} onChange={input.onChange}
                onChangeComplete={event => {forceSubmit()}}/>
      </div>
      <ul className="e-range--markings" data-range-markings="true">
        <li className="e-range--markings--clause" data-range-markings-clause="true"
            data-range-markings-clause-value="200000">0 тыс.
        </li>
        <li className={`${styles['left-third']} e-range--markings--clause`} data-range-markings-clause="true"
            data-range-markings-clause-value="15000000">15 млн
        </li>
        <li className="e-range--markings--clause" data-range-markings-clause="true"
            data-range-markings-clause-value="30000000">1 млн
        </li>
      </ul>
    </div>
  </div>

export default cssmodules(FilterRefillSumField, styles);
