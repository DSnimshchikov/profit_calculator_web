import React from 'react';
import {Field, FieldArray, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import styles from './setting.cssmodule.less';


const renderHead = ({input, label, type, meta: {touched, error}}) =>
  <div>
    <h2>
      {input.value}
    </h2>
  </div>;


const renderField = ({input, label, type, meta: {touched, error}}) =>
  <div>

    <div className="row">
      <div className="col-md-6">
        <label>
          {label}
        </label>
      </div>
      <div className="col-md-6">
        <input {...input} type={type} placeholder={label}/>
      </div>
    </div>
  </div>
;

const renderSavingAccount = ({fields, meta: {error, submitFailed}}) =>
  <div>
    {fields.map((savingAccount, index) =>
      <div className={styles.card}>
        <Field
          name={`${savingAccount}.name`}
          type="text"
          component={renderHead}
          label="Название"
        />
        <Field
          name={`${savingAccount}.weight`}
          type="text"
          component={renderField}
          label="Вес"
        />
      </div>
    )}
  </div>;


let SavingAccountSettingsForm = (props) => {
  const {array, handleSubmit, pristine, reset, submitting} = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
      <FieldArray name="savingAccounts" component={renderSavingAccount}/>
      </div>
      <div className="row">
        <button type="submit" disabled={submitting} className="btn btn-success">
          Сохранить
        </button>
      </div>
    </form>
  );
};


SavingAccountSettingsForm = reduxForm({
  form: 'savingAccountsSettingsForm' // a unique identifier for this form

})(SavingAccountSettingsForm);


// You have to connect() to any reducers that you wish to connect to yourself
SavingAccountSettingsForm = connect(
  state => ({
    initialValues: state.settingReducer.settings.savingAccounts // pull initial values from account reducer
  }),
)(SavingAccountSettingsForm);

export default SavingAccountSettingsForm;
