import React from 'react';
import styles from './setting.cssmodule.less';


const renderField = ({input, label, type, meta: {touched, error}}) =>
  <div>
    <div className={`row btn-group ${error && touched ? 'has-error' : ''}`}>
      <div className="col-md-5">
        <label className={`${styles.label} control-label`}>{label}</label>
      </div>
      <div className="col-md-7">
        <input {...input} type={type} placeholder={label} className="form-control"/>
      </div>
    </div>
    {touched &&
((error &&
<div className="row alert alert-danger" role="alert">
  {error}
</div>)
)}
  </div>
;

const renderHead = ({input, label,label2, type, meta: {touched, error}}) =>
  <div>
    <h2>
      {input.value}
    </h2>
  </div>;


export {renderField, renderHead};
