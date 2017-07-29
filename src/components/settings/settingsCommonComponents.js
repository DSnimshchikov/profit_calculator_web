import React from 'react';
import {Field, FieldArray, reduxForm} from 'redux-form';


const renderField = ({input, label, type, meta: {touched, error}}) =>
  <div className="row">
    <div className="col-md-4">
      {label}
    </div>
    <div className="col-md-8">
      <input {...input} type={type} placeholder={label}/>
    </div>
  </div>;

const renderHead = ({input, label, type, meta: {touched, error}}) =>
  <div>
    <h2>
      {input.value}
    </h2>
  </div>;


export {renderField, renderHead};
