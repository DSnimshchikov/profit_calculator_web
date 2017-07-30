import React from 'react';
import {Field, FieldArray, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import styles from './setting.cssmodule.less';
import {renderField, renderHead} from './settingsCommonComponents';
import {required, number, minValue1, validateSavingAccounts as validate} from './validate';


const renderRates = ({fields, meta: {error, submitFailed}}) =>
  <div>
    <h3>Ставки</h3>
    {fields.map((rate, index) =>
      <div key={`rate_${index}`} className="row">
        <div className="col-md-6">
          <Field
            name={`${rate}.fromPeriod`}
            type="number"
            component={renderField}
            label="Период С"
            validate={[number, required, minValue1]}
          />
        </div>
        <div className="col-md-6">
          <Field
            name={`${rate}.rate`}
            type="number"
            component={renderField}
            label="Ставка"
            validate={[number, required]}
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
          type="number"
          component={renderField}
          label="Вес"
          validate={[number, required, minValue1]}
        />
        <FieldArray name={`${savingAccount}.rates`} component={renderRates}/>
      </div>
    )}
  </div>;


let SavingAccountSettingsForm = (props) => {
  const {array, handleSubmit, pristine, reset, submitting, valid} = props;

  return (
    <div className={`${styles['card-container']} container-fluid form-group`}>

    <form onSubmit={handleSubmit}>
      <div className="row">
        <FieldArray name="savingAccounts" component={renderSavingAccount}/>
      </div>
      <div className="row">
        <div className="col-md-12">
          <button type="submit" disabled={pristine || submitting || valid !== true} className="btn btn-success btn-block">
            Сохранить
          </button>
        </div>

      </div>
    </form>
    </div>
  );
};


SavingAccountSettingsForm = reduxForm({
  form: 'savingAccountsSettingsForm', // a unique identifier for this form
  validate
})(SavingAccountSettingsForm);


// You have to connect() to any reducers that you wish to connect to yourself
SavingAccountSettingsForm = connect(
  state => ({
    initialValues: {savingAccounts: state.settingReducer.settings.savingAccounts} // pull initial values from account reducer
  }),
)(SavingAccountSettingsForm);

export default SavingAccountSettingsForm;
