import React from 'react';
import {Field, FieldArray, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import styles from './setting.cssmodule.less';
import {renderField, renderHead} from './settingsCommonComponents';


const renderRates = ({fields, meta: {error, submitFailed}}) =>
  <div>
    <h3>Ставки</h3>
    {fields.map((rate, index) =>
      <div key={`rate_${index}`} className="row">
        <div className="col-md-6">
          <Field
            name={`${rate}.fromPeriod`}
            type="text"
            component={renderField}
            label="Период С"
          />
        </div>
        <div className="col-md-6">
          <Field
            name={`${rate}.rate`}
            type="text"
            component={renderField}
            label="Ставка"
          />
        </div>
      </div>
    )}
  </div>;

const renderSavingAccount = ({fields, meta: {error, submitFailed}}) =>
  <div>
    {fields.map((savingAccount, index) =>
      <div className={styles.card} key="{`savingAccount_${index}`}">
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
        <FieldArray name={`${savingAccount}.rates`} component={renderRates}/>
      </div>
    )}
  </div>;


let SavingAccountSettingsForm = (props) => {
  const {array, handleSubmit, pristine, reset, submitting} = props;

  return (
    <div className={`${styles['card-container']} container-fluid form-group`}>

    <form onSubmit={handleSubmit}>
      <div className="row">
        <FieldArray name="savingAccounts" component={renderSavingAccount}/>
      </div>
      <div className="row">
        <div className="col-md-12">
          <button type="submit" disabled={submitting} className="btn btn-success btn-block">
            Сохранить
          </button>
        </div>

      </div>
    </form>
    </div>
  );
};


SavingAccountSettingsForm = reduxForm({
  form: 'savingAccountsSettingsForm' // a unique identifier for this form

})(SavingAccountSettingsForm);


// You have to connect() to any reducers that you wish to connect to yourself
SavingAccountSettingsForm = connect(
  state => ({
    initialValues: {savingAccounts: state.settingReducer.settings.savingAccounts} // pull initial values from account reducer
  }),
)(SavingAccountSettingsForm);

export default SavingAccountSettingsForm;
