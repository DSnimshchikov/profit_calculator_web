import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './filter.cssmodule.less';
import ReactDOM from 'react-dom';
import HorizontalSlider from './HorizontalSlider'
let fetchProducts = require('../actions/filter-action');

class Filter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      sum: 120000,
      period: 181,
      decrease: false,
      refill: "true",
      payrollProject: false,
      expensesAuto: 0,
      expensesEntertainment: 0,
      expensesTrip: 0,
      expensesOther: 0,
      refillSum: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  componentDidMount() {
    const { dispatch, selectedSubreddit } = this.props
    dispatch(fetchProducts(selectedSubreddit))
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedSubreddit !== prevProps.selectedSubreddit) {
      const { dispatch, selectedSubreddit } = this.props
      dispatch(fetchProducts(selectedSubreddit))
    }
  }

  handleChange(event) {
    this.setState({sum: event.target.value});
    var sum = ReactDOM.findDOMNode(this.refs.sum).value;
    var period = ReactDOM.findDOMNode(this.refs.period).value;
    var refillSum = ReactDOM.findDOMNode(this.refs.refillSum).value;
    var expensesTrip = ReactDOM.findDOMNode(this.refs.expensesTrip).value;
    var expensesEntertainment = ReactDOM.findDOMNode(this.refs.expensesEntertainment).value;
    var expensesAuto = ReactDOM.findDOMNode(this.refs.expensesAuto).value;
    var expensesOther = ReactDOM.findDOMNode(this.refs.expensesOther).value;

  }

  onChangeInput(event) {
    var value = event.target.value;
    var fieldName = event.target.name;
    if (value == "false") {
      this.setState({[''+fieldName]: true});
    } else {
      this.setState({[''+fieldName]: false});
    }
  }

  static getInitialState() {
    return {
      sum: 100,
      decrease: false,
      refill: "true"
    };
  }

  render() {
    //todo implement HorizontalSlider
    const left317 = {
      left: 317 + 'px'
    }, left100 = {
      left: 100 + 'px'
    }, left235 = {
      left: 235 + 'px'
    };
    const { sum, period, decrease, refill, payrollProject, expensesAuto, expensesEntertainment, expensesTrip, expensesOther, refillSum  } = this.state;
    return (
      <div className="b-deposits-calculator--content g-grid-20">
        <h2 className="b-deposits-calculator--title"> Подбор продукта для клиента ВТБ24</h2>

        <div className="b-deposits-calculator--field">
          <label className="b-deposits-calculator--label">Сумма к накоплению</label>
          <div className="e-range b-deposits-calculator--deposit">
            <div className="e-range--field">
              <input type="text" id="Credit" name="sum"
                     className="e-range--field--entity"
                     ref='sum' defaultValue={sum}
                     data-range-field="true"/>
              {/*<HorizontalSlider/>*/}
              <span
                className="e-range--field--measure e-range--field--measure---currency e-range--field--measure---multiple"
                data-range-measure="true">
                <span className="e-range--field--measure--value" data-range-measure-value="true">Р</span>
                <span className="e-range--field--measure--arrow"></span>
              </span>
              <span className="e-range--field--handler" data-range-handler="true"></span>
            </div>
            <ul className="e-range--markings" data-range-markings="true">
              <li className="e-range--markings--clause" data-range-markings-clause="true"
                  data-range-markings-clause-value="200000">200 тыс.
              </li>
              <li className="e-range--markings--clause " data-range-markings-clause="true" style={left317}
                  data-range-markings-clause-value="15000000">15 млн
              </li>
              <li className="e-range--markings--clause" data-range-markings-clause="true"
                  data-range-markings-clause-value="30000000">30 млн
              </li>
            </ul>
          </div>
        </div>

        <div className="b-deposits-calculator--field">
          <label className="b-deposits-calculator--label">Срок накопления</label>
          <div className="e-range b-deposits-calculator--term">
            <div className="e-range--field">
              <input type="text" className="e-range--field--entity" data-range-field="true"
                     id="Credit" name="period"
                     ref='period' value={period} />
              <span className="e-range--field--measure e-range--field--measure---default " data-range-measure="true">
                  <span className="e-range--field--measure--value" data-range-measure-value="true">дней</span></span>
              <span className="e-range--field--handler" data-range-handler="true"></span>
              <span className="e-range--field--filling" data-range-filling="true"></span>
              <span className="e-range--field--scale" data-range-scale="true"></span>
            </div>
            <ul className="e-range--markings" data-range-markings="true">
              <li className="e-range--markings--clause" data-range-markings-clause="true"
                  data-range-markings-clause-value="91">3 мес.
              </li>
              <li className="e-range--markings--clause" data-range-markings-clause="true"
                  data-range-markings-clause-value="365" style={left100}>1 год
              </li>
              <li className="e-range--markings--clause" data-range-markings-clause="true"
                  data-range-markings-clause-value="730" style={left235}>2 года
              </li>
              <li className="e-range--markings--clause" data-range-markings-clause="true"
                  data-range-markings-clause-value="1830">5 лет
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <label className="b-deposits-calculator--label">Пополнение</label>
            <div className="switch">
              <input id="cmn-toggle-1" className="cmn-toggle cmn-toggle-round" type="checkbox"
                     name="refill" defaultChecked={refill} value={refill} onChange={this.onChangeInput}/>
              <label htmlFor="cmn-toggle-1"></label>
            </div>
          </div>
          <div className="col-md-6">
            <label className="b-deposits-calculator--label">ЗП</label>
            <div className="switch">
              <input id="cmn-toggle-2" className="cmn-toggle cmn-toggle-round" type="checkbox" name="payrollProject"
                     value={payrollProject} onChange={this.onChangeInput}/>
              <label htmlFor="cmn-toggle-2"></label>
            </div>
          </div>
        </div>
        {refill &&
        <div className="b-deposits-calculator--field">
          <label className="b-deposits-calculator--label">Cумма к внесению</label>
          <div className="e-range b-deposits-calculator--term">
            <div className="e-range--field">
              <input type="text" name="period" value={refillSum} ref='refillSum'
                     className="e-range--field--entity" />
              <span className="e-range--field--handler" data-range-handler="true"></span>
              <span className="e-range--field--filling" data-range-filling="true"></span>
              <span className="e-range--field--scale" data-range-scale="true"></span>
            </div>
            <ul className="e-range--markings" data-range-markings="true">
              <li className="e-range--markings--clause" data-range-markings-clause="true"
                  data-range-markings-clause-value="200000">200 тыс.
              </li>
              <li className="e-range--markings--clause " data-range-markings-clause="true" style={left317}
                  data-range-markings-clause-value="15000000">15 млн
              </li>
              <li className="e-range--markings--clause" data-range-markings-clause="true"
                  data-range-markings-clause-value="30000000">30 млн
              </li>
            </ul>
          </div>
        </div>
        }
        <div className="row">
          <div className="col-md-6">
            <label className="b-deposits-calculator--label">Списание</label>
            <div className="switch">
              <input id="cmn-toggle-3" className="cmn-toggle cmn-toggle-round" type="checkbox"
                     name="decrease" value={decrease} onChange={this.onChangeInput}/>
              <label htmlFor="cmn-toggle-3"></label>
            </div>
          </div>

          {decrease &&
          <div className="col-md-6">
            <div className="e-range--field top-distance">
              <input type="text" id="Credit" name="expensesTrip"
                     className="e-range--field--entity"
                     ref="expensesTrip"
                     data-range-field="true" />
              <span className="e-range--field--measure e-range--field--measure---default " data-range-measure="true">
                  <span className="e-range--field--measure--value" data-range-measure-value="true">Путешествие</span>
              </span>
            </div>
            <div className="e-range--field top-distance">
              <input type="text" id="Credit" name="expensesEntertainment"
                     className="e-range--field--entity e-range--field"
                     ref="expensesEntertainment"
                     data-range-field="true" />
              <span className="e-range--field--measure e-range--field--measure---default " data-range-measure="true">
                  <span className="e-range--field--measure--value" data-range-measure-value="true">Развлечение</span>
              </span>
            </div>
            <div className="e-range--field top-distance">
              <input type="text" id="Credit" name="expensesAuto"
                     className="e-range--field--entity e-range--field"
                     ref="expensesAuto"
                     data-range-field="true" />
              <span className="e-range--field--measure e-range--field--measure---default " data-range-measure="true">
                  <span className="e-range--field--measure--value" data-range-measure-value="true">Авто</span>
              </span>
            </div>
            <div className="e-range--field top-distance">
              <input type="text" id="Credit" name="expensesOther"
                     className="e-range--field--entity e-range--field"
                     ref='expensesOther'
                     data-range-field="true" />
              <span className="e-range--field--measure e-range--field--measure---default " data-range-measure="true">
                  <span className="e-range--field--measure--value" data-range-measure-value="true">Прочее</span>
              </span>
            </div>
          </div>
          }
        </div>
        <div className="b-disclaimer">
          <div className="b-disclaimer--inner">
            <p>* Вся информация носит справочный характер и не является публичной офертой </p>
          </div>
        </div>
        <button className='add__btn' onClick={this.handleChange}>
          ПОДОБРАТЬ ВАРИАНТЫ
        </button >
      </div>
    );
  }
}

Filter.displayName = 'Filter';
Filter.propTypes = {};
Filter.defaultProps = {};

export default cssmodules(Filter, styles);
