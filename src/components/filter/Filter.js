import React from 'react';
import {connect} from 'react-redux';
import cssmodules from 'react-css-modules';
import styles from './filter.cssmodule.less';
import {loadProducts} from '../../actions/filter-action'
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import FilterSumField from './FilterSumField';
import FilterPeriodField from './FilterPeriodField';
import FilterRefillSumField from './FilterRefillSumField';
import FilterCheckField from './FilterCheckField';
import FilterSumSimpleField from './FilterSumSimpleField';
import HorizontalSlider from '../HorizontalSlider'

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
    this.setState({['' + event.target.name]: event.target.value});
    this.props.requestProducts(this.makePayload());
  }

  onChangeInput(event) {
    var value = event.target.value;
    var fieldName = event.target.name;
    if (value === "false") {
      this.setState({['' + fieldName]: true});
    } else {
      this.setState({['' + fieldName]: false});
    }
  }

  render() {
    //todo implement HorizontalSlider
    const {sum, period, decrease, refill, payrollProject, expensesAuto, expensesEntertainment, expensesTrip, expensesOther, refillSum} = this.state;
    return (
      <div className="b-deposits-calculator--content g-grid-20">
        <FilterSumField sum={sum} handleChange={this.handleChange}/>
        <FilterPeriodField period={period} handleChange={this.handleChange}/>

        <div className="row">
          <div className="col-md-6">
            <label className="b-deposits-calculator--label">Пополнение</label>
            <FilterCheckField name="refill" value={refill} onChange={this.onChangeInput}/>
          </div>
          <div className="col-md-6">
            <label className="b-deposits-calculator--label">ЗП</label>
            <FilterCheckField name="refill" value={payrollProject} onChange={this.onChangeInput}/>
          </div>
        </div>
        {refill &&
        <FilterRefillSumField sum={refillSum} handleChange={this.handleChange}/>
        }
        <div className="row">
          <div className="col-md-6">
            <label className="b-deposits-calculator--label">Списание</label>
            <FilterCheckField name="refill" value={refill} onChange={this.onChangeInput}/>
          </div>

          {decrease &&
          <div className="col-md-6">
            <FilterSumSimpleField value={expensesTrip} caption="Путешествие" onChange={this.handleChange}/>
            <FilterSumSimpleField value={expensesEntertainment} caption="Развлечение" onChange={this.handleChange}/>
            <FilterSumSimpleField value={expensesAuto} caption="Авто" onChange={this.handleChange}/>
            <FilterSumSimpleField value={expensesOther} caption="Прочее" onChange={this.handleChange}/>
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

function mapDispatchToProps(dispatch) {
  const actionMap = {requestProducts: bindActionCreators(loadProducts, dispatch)};
  return actionMap;
}

Filter.displayName = 'Filter';
Filter.propTypes = {};
Filter.defaultProps = {};

export const FilterContainer = connect(state => ({}), mapDispatchToProps)(cssmodules(Filter, styles));
