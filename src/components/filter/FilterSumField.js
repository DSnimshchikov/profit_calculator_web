import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './filter.cssmodule.less';
import {Field} from 'redux-form'

const FilterSumField  = (props) => <Field name={props.name} type="number" component={renderField} label={props.label}/>;

const renderField = ({input, label, type, meta: {touched, error, warning}}) =>
  <div className="b-deposits-calculator--field">
    <label className="b-deposits-calculator--label">{label} </label>
    <div className="e-range b-deposits-calculator--deposit">
      <div className="e-range--field">
        <input {...input} type={type} className="e-range--field--entity" data-range-field="true"/>
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


export default cssmodules(FilterSumField, styles);