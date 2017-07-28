import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './filter.cssmodule.less';
import {Field} from 'redux-form'

const FilterCheckField = (props) =>
  <Field name={props.name} type="checkbox" component={renderField} label={props.label}/>;

const renderField = ({ input, label, type, meta: {touched, error, warning} }) =>
  <div>
    <label className="b-deposits-calculator--label">{label}</label>
    <div className="switch">
      <input {...input} type={type} id={`cmn-toggle-${input.name}`}
             className="cmn-toggle cmn-toggle-round" />
      <label htmlFor={`cmn-toggle-${input.name}`}></label>
    </div>
  </div>

export default cssmodules(FilterCheckField, styles);
