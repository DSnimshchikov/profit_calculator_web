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

const renderCard = ({ fields, meta: { error, submitFailed } }) =>
  <div>
    {fields.map((card, index) =>
      <div className={styles.card}>
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
    <form onSubmit={handleSubmit} >
      <div className="row">
      <FieldArray name="cards" component={renderCard}/>
      </div>
      <div className="row">
        <button type="submit" disabled={submitting} className="btn btn-success">
          Сохранить
        </button>
      </div>
    </form>
  );
};


CardSettingsForm = reduxForm({
  form: 'cardsSettingsForm' // a unique identifier for this form

})(CardSettingsForm);


// You have to connect() to any reducers that you wish to connect to yourself
CardSettingsForm = connect(
  state => ({
    initialValues: state.settingReducer.settings.cards // pull initial values from account reducer
  }),
)(CardSettingsForm);

export default CardSettingsForm;
