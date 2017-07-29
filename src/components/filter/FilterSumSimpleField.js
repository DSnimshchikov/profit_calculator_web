import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './filter.cssmodule.less';
import {Field} from 'redux-form'

const FilterSumSimpleField = (props) =>
  <Field name={props.name} type="number" component={renderField} label={props.label}/>;

const renderField = ({input, label, type, meta: {touched, error, warning}}) =>
  <div className="e-range--field top-distance">
    <input {...input} type={type} className="e-range--field--entity" data-range-field="true" id="Credit"/>
    {label &&
      <span data-range-measure="true"
            className="e-range--field--measure e-range--field--measure---default ">
        <span className="e-range--field--measure--value"
              data-range-measure-value="true">{label}
        </span>
      </span>
    }
  </div>

export default cssmodules(FilterSumSimpleField, styles);
