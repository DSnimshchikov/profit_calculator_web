import React from 'react'
import {Field, FieldArray, reduxForm} from 'redux-form'
import {connect} from 'react-redux'

import styles from './setting.cssmodule.less'
import {renderField, renderHead} from './settingsCommonComponents'
import {required, number, minValue1, minValue91, maxValue1831, validateDeposits as validate} from './validate'

const renderRates = ({fields, meta: {error, touched, submitFailed}}) =>

  <div>
    <h3>Ставки</h3>
    {fields.map((rate, index) =>
      <div key={`rate_${index}`} className="row">
        <div className="col-md-6">
          <Field
            name={`${rate}.fromPeriod`}
            type="number"
            component={renderField}
            label="Период C"
            validate={[number, required, minValue91, maxValue1831]}
          />
        </div>
        <div className="col-md-6">
          <Field
            name={`${rate}.rate`}
            type="number"
            component={renderField}
            label="Ставка "
            validate={[required, number]}
          />
        </div>
        <div className="row">
          {((error &&
          <div className="row alert alert-danger" role="alert">
            {error}
          </div>)
          )}
        </div>
      </div>

    )}
  </div>

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
          type="number"
          component={renderField}
          label="Вес"
          validate={[required, number, minValue1]}
        />

        <FieldArray name={`${deposit}.rates`} component={renderRates}/>
      </div>
    )}
  </div>


let DepositsSettingsForm = (props) => {
  const {array, handleSubmit, pristine, reset, submitting, valid } = props

  return (
    <div className={`${styles['card-container']} container-fluid form-group`}>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <FieldArray name="deposits" component={renderDeposits}/>
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
  )
}


DepositsSettingsForm = reduxForm({
  form: 'depositsSettingsForm', // a unique identifier for this form
  validate
})(DepositsSettingsForm)


DepositsSettingsForm = connect(
  state => ({
    initialValues: {deposits: state.settingReducer.settings.deposits}
  }),
)(DepositsSettingsForm)

export default DepositsSettingsForm
