import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './filter.cssmodule.less';
import FilterSumField from './FilterSumField';
import FilterPeriodField from './FilterPeriodField';
import FilterRefillSumField from './FilterRefillSumField';
import FilterCheckField from './FilterCheckField';
import FilterSumSimpleField from './FilterSumSimpleField';

const Filter = (props) =>
      <div className="b-deposits-calculator--content g-grid-20">
        <FilterSumField name="initSum" label="Сумма к накоплению"/>
        <FilterPeriodField name="daysCount" label="Срок накопления"/>

        <div className="row hidden" >
          <div className="col-md-4">
            <FilterCheckField name="refill" label="Пополнение"/>
          </div>
          <div className="col-md-8">
            <FilterCheckField name="payrollProject" label="ЗП"/>
          </div>
        </div>
        {props.refill &&
        <FilterRefillSumField name="monthRefillSum"/>
        }
        <div className="row">
          <div className="col-md-4">
            <FilterCheckField name="decrease" label="Списание" handleSubmit={props.handleSubmit}/>
        </div>

        {props.decrease &&
          <div className="col-md-8">
            <FilterSumSimpleField name="categories2Costs.TRAVEL" label="Путешествие"/>
            <FilterSumSimpleField name="categories2Costs.FUN" label="Развлечение"/>
            <FilterSumSimpleField name="categories2Costs.AUTO" label="Авто"/>
            <FilterSumSimpleField name="categories2Costs.OTHER" label="Прочее"/>
          </div>
        }
        </div>
        <div className="b-disclaimer">
          <div className="b-disclaimer--inner">
            <p>* Вся информация носит справочный характер и не является публичной офертой </p>
          </div>
        </div>
      </div>

export default cssmodules(Filter, styles);
