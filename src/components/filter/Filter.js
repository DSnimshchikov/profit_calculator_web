import React from 'react';
import {Field, FieldArray} from 'redux-form'
import cssmodules from 'react-css-modules';
import styles from './filter.cssmodule.less';
import FilterSumField from './FilterSumField';
import FilterPeriodField from './FilterPeriodField';
import FilterRefillSumField from './FilterRefillSumField';
import FilterCheckField from './FilterCheckField';
import FilterSumSimpleField from './FilterSumSimpleField';

const renderField = ({input, type, meta: {touched, error}}) =>
  <span>
      {input.value}
  </span>

const renderTransactions = ({fields, meta: {error, submitFailed}}) =>
  <div>
    <div className={`${styles['transations-head']} row`}>
      <div className="col-md-4">
        Дата
      </div>
      <div className="col-md-2">
        Путешетсвия
      </div>
      <div className="col-md-2">
        Развлечения
      </div>
      <div className="col-md-2">
        Автомобиль
      </div>
      <div className="col-md-2">
        Прочее
      </div>
    </div>
    {fields.map((transaction, index) =>
      <div key={`transactions_${index}`}>
        <div className="row">
          <div className="col-md-4">
            <Field
              name={`${transaction}.date`}
              type="date"
              component={renderField}
            />
          </div>
          <div className="col-md-2">
            <Field
              name={`${transaction}.category2Cost.TRAVEL`}
              type="text"
              component={renderField}
            />
          </div>
          <div className="col-md-2">
            <Field
              name={`${transaction}.category2Cost.FUN`}
              type="text"
              component={renderField}
            />
          </div>
          <div className="col-md-2">
            <Field
              name={`${transaction}.category2Cost.AUTO`}
              type="text"
              component={renderField}
            />
          </div>
          <div className="col-md-2">
            <Field
              name={`${transaction}.category2Cost.OTHER`}
              type="text"
              component={renderField}
            />
          </div>
        </div>
      </div>
    )}
  </div>;

const Filter = (props) =>
  <div className="b-deposits-calculator--content g-grid-20">
    {props.clientId &&
    <h2>Поля предзаполены расчетыми данными клиента: Пупкин Василий</h2>
    }
    <FilterSumField name="initSum" label="Сумма" forceSubmit={props.forceSubmit}/>
    <FilterPeriodField name="daysCount" label="Срок" forceSubmit={props.forceSubmit}/>

    <div className="row">
      <div className="col-md-4">
        <FilterCheckField name="refill" label="Пополнение" handleSubmit={props.handleSubmit}/>
      </div>
      <div className="col-md-8">
        <FilterCheckField name="payrollProject" label="ЗП" handleSubmit={props.handleSubmit}/>
      </div>
    </div>
    {props.refill &&
    <div className="category">
      <FilterRefillSumField name="monthRefillSum" label="Ежемесячное пополнение" forceSubmit={props.forceSubmit}/>
    </div>
    }
    <div className="row">
      <div className="col-md-4">
        <FilterCheckField name="decrease" label="Категории" handleSubmit={props.handleSubmit}/>
      </div>
      <div className="col-md-8">
        <FilterCheckField name="creditCard" label="Кредитная карта" handleSubmit={props.handleSubmit}/>
      </div>
    </div>

    {props.decrease &&
    <div className="category">
      <div className="row category">
        <div className="col-md-4">
          <label>Наименование</label>
        </div>
        <div className="col-md-4">
          <label>Заинтересован</label>
        </div>
        <div className="col-md-4">
          <label>Сумма списаний</label>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <label>Путешествие</label>
        </div>
        <div className="col-md-4">
          <FilterCheckField name="categories2Costs.TRAVEL.first" handleSubmit={props.handleSubmit}/>
        </div>
        <div className="col-md-4">
          <FilterSumSimpleField name="categories2Costs.TRAVEL.second"/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <label>Развлечения</label>
        </div>
        <div className="col-md-4">
          <FilterCheckField name="categories2Costs.FUN.first" handleSubmit={props.handleSubmit}/>
        </div>
        <div className="col-md-4">
          <FilterSumSimpleField name="categories2Costs.FUN.second"/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <label>Авто</label>
        </div>
        <div className="col-md-4">
          <FilterCheckField name="categories2Costs.AUTO.first" handleSubmit={props.handleSubmit}/>
        </div>
        <div className="col-md-4">
          <FilterSumSimpleField name="categories2Costs.AUTO.second"/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <label>Прочее</label>
        </div>
        <div className="col-md-4">
          <FilterCheckField name="categories2Costs.OTHER.first" handleSubmit={props.handleSubmit}/>
        </div>
        <div className="col-md-4">
          <FilterSumSimpleField name="categories2Costs.OTHER.second"/>
        </div>
      </div>
    </div>
    }
    {props.clientId &&
    <div className="category row">
      <h4>Траты клиента по категориям</h4>
      <FieldArray name="transactions" component={renderTransactions}/>
    </div>
    }
    <div className="b-disclaimer">
      <div className="b-disclaimer--inner">
        <p>* Вся информация носит справочный характер и не является публичной офертой </p>
      </div>
    </div>
  </div>

const normalizePeriodField = (value, previousValue) => {
  if (!value) return value;
  return JSON.parse(value);
}
const formatter = (value, name) => {
  return JSON.stringify(value);
}

export default cssmodules(Filter, styles);
