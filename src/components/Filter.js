import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './filter.cssmodule.less';
import HorizontalSlider from './HorizontalSlider'

class Filter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      sum: 120000,
      period: 181,
      markings: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.onChangePeriod = this.onChangePeriod.bind(this);
    this.onChangePayInterest = this.onChangePayInterest.bind(this);
  }


  componentDidMount() {
    fetch('http://localhost:8080/products', {
      method: 'get',
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
    })
      .then(function (data) {
        console.log('Request succeeded with JSON response', data);
      })
      .catch(function (error) {
        console.log('Request failed', error);
      });
  }

  handleChange(event) {
    this.setState({sum: event.target.value});
    this.componentDidMount();
  }

  onChangePeriod(event) {
    this.setState({period: event.target.value});
    this.componentDidMount();
  }

  onChangePayInterest(event) {
    this.setState({markings: event.target.value});

  }

  static getInitialState() {
    return {
      sum: 100
    };
  }

  render() {
    const left317 = {
      left: 317 + 'px'
    }, left100 = {
      left: 100 + 'px'
    }, left235 = {
      left: 235 + 'px'
    };
    var sum = this.state.sum,
      period = this.state.period,
      markings = this.state.markings
      ;
    return (
      <div className="b-deposits-calculator--content g-grid-20">
        <h2 className="b-deposits-calculator--title"> Подбор продукта для клиента ВТБ24</h2>

        <div className="b-deposits-calculator--field">
          <label className="b-deposits-calculator--label">Сумма к накоплению</label>
          <div className="e-range b-deposits-calculator--deposit">
            <div className="e-range--field">
              <input type="text" id="Credit" name="sum"
                     className="e-range--field--entity"
                     value={sum} onChange={this.handleChange}
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
                     value={period} onChange={this.onChangePeriod}/>
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
                     name="PayInterest"/>
              <label htmlFor="cmn-toggle-1"></label>
            </div>
          </div>
          <div className="col-md-6">
            <label className="b-deposits-calculator--label">ЗП</label>
            <div className="switch">
              <input id="cmn-toggle-2" className="cmn-toggle cmn-toggle-round" type="checkbox"/>
              <label htmlFor="cmn-toggle-2"></label>
            </div>
          </div>
        </div>
        <div className="b-deposits-calculator--field">
          <label className="b-deposits-calculator--label">Cумма к внесению</label>
          <div className="e-range b-deposits-calculator--term">
            <div className="e-range--field">
              <input type="text" name="period" value={period} className="e-range--field--entity"
                     onChange={this.onChangePeriod}/>
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

        <div className="row">
          <div className="col-md-6">
            <label className="b-deposits-calculator--label">Списание</label>
            <div className="switch">
              <input id="cmn-toggle-3" className="cmn-toggle cmn-toggle-round" type="checkbox"
                     name="PayInterest" value={markings} onChange={this.onChangePayInterest}/>
              <label htmlFor="cmn-toggle-3"></label>
            </div>
          </div>

          {markings &&
          <div className="col-md-6">
            <div className="e-range--field top-distance">
              <input type="text" id="Credit" name="sum"
                     className="e-range--field--entity"
                     value={sum} onChange={this.handleChange}
                     data-range-field="true" placeholder="Путешествие"/>
              <span className="e-range--field--measure e-range--field--measure---default " data-range-measure="true">
                  <span className="e-range--field--measure--value" data-range-measure-value="true">Путешествие</span>
              </span>
            </div>
            <div className="e-range--field top-distance">
              <input type="text" id="Credit" name="sum"
                     className="e-range--field--entity e-range--field"
                     value={sum} onChange={this.handleChange.bind(this)}
                     data-range-field="true" placeholder="Развлечение"/>
              <span className="e-range--field--measure e-range--field--measure---default " data-range-measure="true">
                  <span className="e-range--field--measure--value" data-range-measure-value="true">Развлечение</span>
              </span>
            </div>
            <div className="e-range--field top-distance">
              <input type="text" id="Credit" name="sum"
                     className="e-range--field--entity e-range--field"
                     value={sum} onChange={this.handleChange.bind(this)}
                     data-range-field="true" placeholder="Авто"/>
              <span className="e-range--field--measure e-range--field--measure---default " data-range-measure="true">
                  <span className="e-range--field--measure--value" data-range-measure-value="true">Авто</span>
              </span>
            </div>
            <div className="e-range--field top-distance">
              <input type="text" id="Credit" name="sum"
                     className="e-range--field--entity e-range--field"
                     value={sum} onChange={this.handleChange.bind(this)}
                     data-range-field="true" placeholder="Прочее"/>
              <span className="e-range--field--measure e-range--field--measure---default " data-range-measure="true">
                  <span className="e-range--field--measure--value" data-range-measure-value="true">Прочее</span>
              </span>
            </div>
          </div>
          }
        </div>
        < div className="b-disclaimer">
          < div className="b-disclaimer--inner">
            < p >* Вся информация носит справочный характер и не является публичной офертой </p>
          </div>
        </div>
        <button className='add__btn' onClick={this.componentDidMount }>
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
