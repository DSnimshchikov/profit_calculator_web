import React from 'react';
import {Field, FieldArray, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import styles from './setting.cssmodule.less';
import {renderField, renderHead} from './settingsCommonComponents';

const renderCard = ({fields, meta: {error, submitFailed}}) =>
  <div>
    {fields.map((card, index) =>
      <div className={styles.card} key={`cards_${index}`}>
        <Field
          name={`${card}.name`}
          type="text"
          component={renderHead}
          label="Название"
        />
        <Field
          name={`${card}.weight`}
          type="text"
          component={renderField}
          label="Вес"
        />
      </div>
    )}
  </div>;


let CardSettingsForm = (props) => {
  const {array, handleSubmit, pristine, reset, submitting} = props;

  return (
    <div className="container-fluid">

      <form onSubmit={handleSubmit}>
        <div className="row">
          <FieldArray name="cards" component={renderCard}/>
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


CardSettingsForm = reduxForm({
  form: 'cardsSettingsForm' // a unique identifier for this form

})(CardSettingsForm);


// You have to connect() to any reducers that you wish to connect to yourself
CardSettingsForm = connect(
  state => ({
    initialValues: {cards: state.settingReducer.settings.cards} // pull initial values from account reducer
  }),
)(CardSettingsForm);

export default CardSettingsForm;
