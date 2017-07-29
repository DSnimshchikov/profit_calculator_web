import React from 'react';
import {Field, FieldArray, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import styles from './setting.cssmodule.less';
import {renderField} from './settingsCommonComponents';

function getCardType(cardType) {

  if (cardType !== null && cardType !== undefined) {
    if (cardType === 'DEBIT') {
      return 'Дебетовая';
    } else if (cardType === 'CREDIT') {
      return 'Кредитная';
    }
  }
  return '';
}

const renderHead = ({input, label, type, meta: {touched, error}}) =>(
  <div>
    <h2>
      Мультикарта {getCardType(input.value)}
    </h2>
  </div>
)


const renderCard = ({fields, meta: {error, submitFailed}}) =>
  <div>
    {fields.map((card, index) =>
      <div className={styles.card} key={`cards_${index}`}>
        <Field
          name={`${card}.cardCategory`}
          type="text"
          component={renderHead}
          label="Мультикарта"
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
    <div className={`${styles['card-container']} container-fluid form-group`}>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <FieldArray name="cards" component={renderCard}/>
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
