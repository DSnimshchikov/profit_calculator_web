import React from 'react'
import cssmodules from 'react-css-modules'
import styles from './filter.cssmodule.less'
import {Field} from 'redux-form'
import '../../styles/horizontalSlider.css'
import Slider from 'react-rangeslider'
import {PERIOD_DAYS_STEP, PERIOD_DAYS_MIN, PERIOD_DAYS_MAX} from '../../actions/const'

const FilterPeriodField = (props) =>
  <Field name={props.name} type="number" component={renderField} label={props.label} forceSubmit={props.forceSubmit}/>;

const renderField = ({forceSubmit, input, label, type, meta: {touched, error, warning}}) =>
  <div className="b-deposits-calculator--field">
    <label className="b-deposits-calculator--label">{label}</label>
    <div className="e-range b-deposits-calculator--term">
      <div className="e-range--field">
        <input {...input} type={type} className="e-range--field--entity" />
        <span className="e-range--field--measure e-range--field--measure---default " data-range-measure="true">
                  <span className="e-range--field--measure--value" data-range-measure-value="true">дней</span></span>
        <Slider min={PERIOD_DAYS_MIN} max={PERIOD_DAYS_MAX} step={PERIOD_DAYS_STEP}
                name={input.name} value={input.value} onChange={input.onChange}
                onChangeComplete={event => {forceSubmit()}}/>
      </div>
      <ul className="e-range--markings" data-range-markings="true">
        <li className="e-range--markings--clause" data-range-markings-clause="true"
            data-range-markings-clause-value="91">3 мес.
        </li>
        <li className={`${styles['left-first']} e-range--markings--clause`} data-range-markings-clause="true"
            data-range-markings-clause-value="365">1 год
        </li>
        <li className={`${styles['left-second']} e-range--markings--clause`} data-range-markings-clause="true"
            data-range-markings-clause-value="730">2 года
        </li>
        <li className="e-range--markings--clause" data-range-markings-clause="true"
            data-range-markings-clause-value="1830">5 лет
        </li>
      </ul>
    </div>
  </div>

const normalizePeriodField = (value, previousValue) => {
  if (!value) return value;
  if (value < PERIOD_DAYS_MIN) return PERIOD_DAYS_MIN;
  if (value > PERIOD_DAYS_MAX) return PERIOD_DAYS_MAX;
  return value;
}

export default cssmodules(FilterPeriodField, styles);
