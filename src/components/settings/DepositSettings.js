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

const renderDeposits = ({fields, meta: {error, submitFailed}}) =>
  <div>
    {fields.map((deposit, index) =>
      <div className={styles.card} key={`deposit_${index}`}>
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
        <FieldArray name={`${deposit}.rates`} component={renderRates}/>
      </div>
    )}
  </div>;


let DepositsSettingsForm = (props) => {
  const {array, handleSubmit, pristine, reset, submitting} = props;

  return (
    <div className="container-fluid">
      <form onSubmit={handleSubmit}>
        <div className="row">
        <FieldArray name="deposits" component={renderDeposits}/>
        </div>
        <div className="row bottom-right">
          <div className="col-md-offset-6 col-md-6">
          <button type="submit" disabled={submitting} className="btn btn-success">
            Сохранить
          </button>
          </div>
        </div>
      </form>
    </div>
  );
};


DepositsSettingsForm = reduxForm({
  form: 'depositsSettingsForm' // a unique identifier for this form

})(DepositsSettingsForm);


// You have to connect() to any reducers that you wish to connect to yourself
DepositsSettingsForm = connect(
  state => ({
    initialValues: {deposits: state.settingReducer.settings.deposits} // pull initial values from account reducer
  }),
)(DepositsSettingsForm);

export default DepositsSettingsForm;
