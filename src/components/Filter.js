import React from 'react';
import {connect} from 'react-redux';
import cssmodules from 'react-css-modules';
import styles from './filter.cssmodule.less';
import {loadProducts} from '../actions/filter-action'
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import HorizontalSlider from './HorizontalSlider'

class Filter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      sum: 120000,
      period: 181,
      decrease: false,
      refill: "true",
      payrollProject: false,
      expensesAuto: 10000,
      expensesEntertainment: 10000,
      expensesTrip: 10000,
      expensesOther: 10000,
      refillSum: 10000
    };
    this.handleChange = this.handleChange.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  componentWillMount() {
    this.props.requestProducts(this.makePayload());
  }

  makePayload() {
    var category2Cost = {
      TRAVEL: ReactDOM.findDOMNode(this.refs.expensesTrip) ? ReactDOM.findDOMNode(this.refs.expensesTrip).value : this.state.expensesTrip,
      FUN: ReactDOM.findDOMNode(this.refs.expensesEntertainment) ? ReactDOM.findDOMNode(this.refs.expensesEntertainment).value : this.state.expensesEntertainment,
      AUTO: ReactDOM.findDOMNode(this.refs.expensesAuto) ? ReactDOM.findDOMNode(this.refs.expensesAuto).value : this.state.expensesAuto,
      OTHER: ReactDOM.findDOMNode(this.refs.expensesOther) ? ReactDOM.findDOMNode(this.refs.expensesOther).value : this.state.expensesOther
    }

    return {
      initSum: ReactDOM.findDOMNode(this.refs.sum) ? ReactDOM.findDOMNode(this.refs.sum).value : this.state.sum,
      daysCount: ReactDOM.findDOMNode(this.refs.period) ? ReactDOM.findDOMNode(this.refs.period).value : this.state.period,
      monthRefillSum: ReactDOM.findDOMNode(this.refs.refillSum) ? ReactDOM.findDOMNode(this.refs.refillSum).value : this.state.refillSum,
      categories2Costs: category2Cost
    }
  }

  handleChange(event) {
    debugger;
    this.setState({['' + event.target.name]: event.target.value});
    this.props.requestProducts(this.makePayload());
  }

  onChangeInput(event) {
    var value = event.target.value;
    var fieldName = event.target.name;
    if (value == "false") {
      this.setState({['' + fieldName]: true});
    } else {
      this.setState({['' + fieldName]: false});
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
    const {sum, period, decrease, refill, payrollProject, expensesAuto, expensesEntertainment, expensesTrip, expensesOther, refillSum} = this.state;
    return (
      <div className="b-deposits-calculator--content g-grid-20">
        <div className="b-deposits-calculator--field">
          <label className="b-deposits-calculator--label">Сумма к накоплению</label>
          <div className="e-range b-deposits-calculator--deposit">
            <div className="e-range--field">
              <input type="text" id="Credit" name="sum"
                     className="e-range--field--entity"
                     ref='sum' value={sum} onChange={this.handleChange}
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
                     ref='period' value={period} onChange={this.handleChange}/>
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
          <label className="b-deposits-calculator--label">Ежемесячное пополнение</label>
          <div className="e-range b-deposits-calculator--term">
            <div className="e-range--field">
              <input type="text" name="refillSum" value={refillSum} ref='refillSum' onChange={this.handleChange}
                     className="e-range--field--entity"/>
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
                     ref="expensesTrip" value={expensesTrip}
                     onChange={this.handleChange}
                     data-range-field="true"/>
              <span className="e-range--field--measure e-range--field--measure---default " data-range-measure="true">
                  <span className="e-range--field--measure--value" data-range-measure-value="true">Путешествие</span>
              </span>
            </div>
            <div className="e-range--field top-distance">
              <input type="text" id="Credit" name="expensesEntertainment"
                     className="e-range--field--entity e-range--field"
                     ref="expensesEntertainment" value={expensesEntertainment}
                     onChange={this.handleChange}
                     data-range-field="true"/>
              <span className="e-range--field--measure e-range--field--measure---default " data-range-measure="true">
                  <span className="e-range--field--measure--value" data-range-measure-value="true">Развлечение</span>
              </span>
            </div>
            <div className="e-range--field top-distance">
              <input type="text" id="Credit" name="expensesAuto"
                     className="e-range--field--entity e-range--field"
                     ref="expensesAuto" value={expensesAuto}
                     onChange={this.handleChange}
                     data-range-field="true"/>
              <span className="e-range--field--measure e-range--field--measure---default " data-range-measure="true">
                  <span className="e-range--field--measure--value" data-range-measure-value="true">Авто</span>
              </span>
            </div>
            <div className="e-range--field top-distance">
              <input type="text" id="Credit" name="expensesOther"
                     className="e-range--field--entity e-range--field"
                     ref='expensesOther' value={expensesOther}
                     onChange={this.handleChange}
                     data-range-field="true"/>
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //связываем внутренний св-ва с данными из state redux
});

function mapDispatchToProps(dispatch) {
  const actionMap = {requestProducts: bindActionCreators(loadProducts, dispatch)};
  return actionMap;
}

Filter.displayName = 'Filter';
Filter.propTypes = {};
Filter.defaultProps = {};

export const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(cssmodules(Filter, styles));
