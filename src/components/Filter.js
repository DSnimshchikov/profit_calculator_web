import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './filter.cssmodule.less';

class Filter extends React.Component {

  render() {
    return (
      <div className="b-deposits-calculator--content g-grid-20"><h2 className="b-deposits-calculator--title">Рассчитайте ваш
        вклад</h2>
        <div className="b-deposits-calculator--field"><label className="b-deposits-calculator--label">Сумма</label>
          <input className="b-deposits-calculator--currency" type="hidden" value="рубли"/>
          <div className="e-range b-deposits-calculator--deposit">
            <div className="e-range--field">
              <input type="text" id="Credit" value="1400000" className="e-range--field--entity" data-range-field="true"/>
              <span
                className="e-range--field--measure e-range--field--measure---currency e-range--field--measure---multiple"
                data-range-measure="true"><span className="e-range--field--measure--value"
                                                data-range-measure-value="true">Р</span>
                <span className="e-range--field--measure--arrow"></span>
                <span className="e-range--field--measure--options">
                  <span className="e-range--field--measure--options--clause g-hidden" data-range-measure-clause="true"
                        data-range-measure-clause-value="рубли">Р</span>
                  <span className="e-range--field--measure--options--clause "
                        data-range-measure-clause="true"
                        data-range-measure-clause-value="доллары">$</span>
                  <span className="e-range--field--measure--options--clause " data-range-measure-clause="true"
                        data-range-measure-clause-value="евро">€</span>
                </span>
              </span>
              <span className="e-range--field--handler" data-range-handler="true"></span>
            </div>
            <ul className="e-range--markings" data-range-markings="true">
              <li className="e-range--markings--clause" data-range-markings-clause="true"
                  data-range-markings-clause-value="200000">200 тыс.
              </li>
              <li className="e-range--markings--clause" data-range-markings-clause="true"
                  data-range-markings-clause-value="15000000" >15 млн
              </li>
              <li className="e-range--markings--clause" data-range-markings-clause="true"
                  data-range-markings-clause-value="30000000">30 млн
              </li>
            </ul>
          </div>
        </div>
        <div className="b-deposits-calculator--field"><label className="b-deposits-calculator--label">Срок</label>
          <div className="e-range b-deposits-calculator--term">
            <div className="e-range--field">
              <input type="text" id="Credit" value="180" className="e-range--field--entity" data-range-field="true"/>
              <span className="e-range--field--measure e-range--field--measure---default " data-range-measure="true">
                  <span className="e-range--field--measure--value" data-range-measure-value="true">дней</span></span>
              <span className="e-range--field--handler" data-range-handler="true"></span>
              <span className="e-range--field--filling" data-range-filling="true" ></span>
              <span className="e-range--field--scale" data-range-scale="true"></span>
            </div>
            <ul className="e-range--markings" data-range-markings="true">
              <li className="e-range--markings--clause" data-range-markings-clause="true"
                  data-range-markings-clause-value="91">3 мес.
              </li>
              <li className="e-range--markings--clause" data-range-markings-clause="true"
                  data-range-markings-clause-value="365" >1 год
              </li>
              <li className="e-range--markings--clause" data-range-markings-clause="true"
                  data-range-markings-clause-value="730" >2 года
              </li>
              <li className="e-range--markings--clause" data-range-markings-clause="true"
                  data-range-markings-clause-value="1830">5 лет
              </li>
            </ul>
          </div>
        </div>
        <div className="b-deposits-calculator--field"><label className="b-deposits-calculator--label">Проценты</label>
          <label className="e-radio">
            <input className="e-radio--radio" type="radio" name="PayInterest" value="оставлять на вкладе" defaultChecked/>
            <span className="e-radio--icon"></span>
            <span className="e-radio--label">Оставлять на вкладе</span>
            <div className="e-radio--error">
              <p className="e-radio--error--contents">Обязательное поле</p>
            </div>
          </label>
          <label className="e-radio">
            <input className="e-radio--radio" type="radio" name="PayInterest" value="перечислять на счет"/>
            <span className="e-radio--icon"></span>
            <span className="e-radio--label">Перечислять на счет</span>
            <div className="e-radio--error">
              <p className="e-radio--error--contents">Обязательное поле</p>
            </div>
          </label>
        </div>
        <div className="g-hidden"><label className="e-checkbox b-deposits-calculator--bonus">
          <input className="e-checkbox--checkbox" id="BonusInternet" type="checkbox" name="" defaultChecked/>
          <span className="e-checkbox--icon"></span>
          <span className="e-checkbox--label">Включить бонус к ставке при открытии через интернет-банк</span>
          <div className="e-checkbox--tooltip"><p className="e-checkbox--tooltip--contents">Услуга доступна только для клиентов
            <a href="http://www.vtb24.ru/personal/service/package" target="_blank">ДКО.</a>Если вы не подключены к
            интернет-банку, необходимо подойти в ближайший офис с паспортом.</p>
          </div>
          <div className="e-checkbox--error">
            <p className="e-checkbox--error--contents">Обязательное поле</p>
          </div>
        </label>
        </div>
        <div className="b-disclaimer">
          <div className="b-disclaimer--inner"><p>* Вся информация носит справочный характер и не является публичной
            офертой</p></div>
        </div>
      </div>
    );
  }
}

Filter.displayName = 'Filter';
Filter.propTypes = {};
Filter.defaultProps = {};

export default cssmodules(Filter, styles);
// export default Filter;
