import React from 'react';
import {Field, FieldArray, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import styles from './setting.cssmodule.less';
import {renderField, renderHead} from './settingsCommonComponents';
import {required, number} from './validate';


const renderCardOption = ({fields, meta: {error, submitFailed}}) =>
  <div>
    {fields.map((cardOption, index) =>
      <div className={styles.card} key={`cards_${index}`}>
        <Field
          name={`${cardOption}.name`}
          type="number"
          component={renderHead}
          label="Мультикарта"
        />
        <Field
          name={`${cardOption}.rate1`}
          type="number"
          component={renderField}
          label="Ставка для POS-оборота по Мультикарте от 5 до 15 тыс. руб."
          validate={[required, number]}
        />

        <Field
          name={`${cardOption}.rate2`}
          type="number"
          component={renderField}
          label="Ставка для POS-оборота по Мультикарте от 15 до 75 тыс. руб."
          validate={[required, number]}
        />

        <Field
          name={`${cardOption}.rate3`}
          type="number"
          component={renderField}
          label="Ставка для POS-оборота по Мультикарте от 75 тыс. руб."
          validate={[required, number]}
        />
      </div>
    )}
  </div>;


let CardOptionSettingsForm = (props) => {
  const {array, handleSubmit, pristine, reset, submitting,valid} = props;

  return (
    <div className={`${styles['card-container']} container-fluid form-group`}>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <FieldArray name="cardOptions" component={renderCardOption}/>
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


CardOptionSettingsForm = reduxForm({
  form: 'cardOptionsSettingsForm' // a unique identifier for this form

})(CardOptionSettingsForm)



CardOptionSettingsForm = connect(
  state => ({
    initialValues: {cardOptions: state.settingReducer.settings.cardOptions}
  }),
)(CardOptionSettingsForm)

export default CardOptionSettingsForm
