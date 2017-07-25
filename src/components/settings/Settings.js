import React from 'react';
import {connect} from 'react-redux';
import cssmodules from 'react-css-modules';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import fetch from 'isomorphic-fetch'
import DepositSettings  from './DepositSettings'
import SavingAccountSettings from './SavingAccountSettings'


class Settings extends React.Component {

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

  handleChange(event) {
    this.setState({['' + event.target.name]: event.target.value});
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
      this.setState({['' + fieldName]: true});
    } else {
      this.setState({['' + fieldName]: false});
    }
  }

  render() {
    const {sum, period, decrease, refill, payrollProject, expensesAuto, expensesEntertainment, expensesTrip, expensesOther, refillSum} = this.state;
    return (
      <div className="container">
        <div className="row">
          <h2>Настройки вкладов НС</h2>
        </div>
        <DepositSettings sum={sum} refill={refill} payrollProject={payrollProject}
                         handleChange={this.handleChange} onChangeInput={this.onChangeInput}/>
        <DepositSettings sum={sum} refill={refill} payrollProject={payrollProject}
                         handleChange={this.handleChange} onChangeInput={this.onChangeInput}/>
        <DepositSettings sum={sum} refill={refill} payrollProject={payrollProject}
                         handleChange={this.handleChange} onChangeInput={this.onChangeInput}/>
        <div className="row">
          <h2>Настройки НС</h2>
        </div>
        <SavingAccountSettings sum={sum} handleChange={this.handleChange}/>
        <SavingAccountSettings sum={sum} handleChange={this.handleChange}/>
        <SavingAccountSettings sum={sum} handleChange={this.handleChange}/>
        <SavingAccountSettings sum={sum} handleChange={this.handleChange}/>
      </div>
    );
  }

}

export default Settings ;

