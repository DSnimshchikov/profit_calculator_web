import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './filter.cssmodule.less';
import {Field} from 'redux-form'

const FilterCheckField = (props) =>
  <Field name={props.name} type="checkbox" component={renderField} label={props.label}
         handleSubmit={props.handleSubmit}/>;

const renderField = ({handleSubmit, input, label, type, meta: {touched, error, warning}}) =>
  <div>
    <label className="b-deposits-calculator--label">{label}</label>
    <div className="switch">
      <input {...input} type={type} id={`cmn-toggle-${input.name}`}
             className="cmn-toggle cmn-toggle-round"
             onChange={event => {
               handleSubmit(values => {
                 this.props.onSubmit(Object.assign({}, values, {[input.name]: event.target.value}))()
               })
             }}/>
      <label htmlFor={`cmn-toggle-${input.name}`} onClick={event => {
        console.log("mylog " + JSON.stringify(input.value))
        input.value = !input.value;
        event.target.value = input.value;
        input.onChange(event)
        setTimeout(handleSubmit)
      }}></label>
    </div>
  </div>

export default cssmodules(FilterCheckField, styles);
