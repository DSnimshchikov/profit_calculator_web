import React from 'react';
import {Field, FieldArray, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import styles from './setting.cssmodule.less';



const renderHead = ({  input, label, type, meta: { touched, error } }) =>
  <div>
    <h2>
      {input.value}
    </h2>
  </div>;


const renderField = ({ input, label, type, meta: { touched, error } }) =>
  <div>
    <label>
      {label}
    </label>
    <div>
      <input {...input} type={type} placeholder={label} />
    </div>
  </div>;

const renderDeposits = ({ fields, meta: { error, submitFailed } }) =>
  <div >
    {fields.map((deposit, index) =>
      <div className={styles.card}>
        <Field
          name={`${deposit}.name`}
          type="text"
          component={renderHead}
          label="Название"
        />
        <Field
          name={`${deposit}.weight`}
          type="text"
          component={renderField}
          label="Вес"
        />

        <Field
          name={`${deposit}.weight`}
          type="text"
          component={renderField}
          label="Вес"
        />
      </div>
    )}
  </div>


let DepositsSettingsForm = (props) => {
  const {array, handleSubmit, pristine, reset, submitting} = props;

  return (
    <form onSubmit={handleSubmit}>
      <FieldArray name="deposits" component={renderDeposits}/>
      <div>
        <button type="submit" disabled={submitting} className="btn btn-success">
          Сохранить
        </button>

      </div>
    </form>
  );
};


DepositsSettingsForm = reduxForm({
  form: 'depositsSettingsForm' // a unique identifier for this form

})(DepositsSettingsForm);


// You have to connect() to any reducers that you wish to connect to yourself
DepositsSettingsForm = connect(
  state => ({
    initialValues: state.settingReducer.settings.deposits // pull initial values from account reducer
  }),
)(DepositsSettingsForm);

export default DepositsSettingsForm;
