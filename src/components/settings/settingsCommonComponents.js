import React from 'react';
import styles from './setting.cssmodule.less'


const renderField = ({input, label, type, meta: {touched, error}}) =>
  <div className="row">
    <div className="col-md-5">
      <label className={`${styles.label} control-label`}>{label}</label>
    </div>
    <div className="col-md-7">
      <input {...input} type={type} placeholder={label} className="form-control"/>
    </div>
  </div>;

const renderHead = ({input, label, type, meta: {touched, error}}) =>
  <div>
    <h2>
      {input.value}
    </h2>
  </div>;


export {renderField, renderHead};
