import React from 'react'
import {connect} from 'react-redux';
import {Field, reduxForm, initialize, formValueSelector, submit} from 'redux-form';
import Filter from '../components/filter/Filter';

class FilterForm extends React.Component {

  componentDidMount() {
    if (this.props.clientId === '1') {
      this.props.initialize(filterKnownClient);
      this.props.onSubmit(filterKnownClient);
    } else {
      this.props.initialize(filterDefault);
      this.props.onSubmit(filterDefault);
    }
  }

  render() {
    const {handleSubmit, forceSubmit} = this.props;
    return (
      <form onSubmit={ handleSubmit } onChange={() => setTimeout(handleSubmit, 100)}>
        <Filter refill={this.props.refill} decrease={this.props.decrease} handleSubmit={handleSubmit}
                forceSubmit={forceSubmit} clientId={this.props.clientId}/>
      </form>
    )
  }
}

const filterDefault = {
  initSum: 200000,
  daysCount: 181,
  decrease: false,
  refill: true,
  payrollProject: false,
  monthRefillSum: 10000,
  categories2Costs: {
    TRAVEL: {first: true, second: 100},
    FUN: {first: true, second: 100},
    AUTO: {first: false, second: 100},
    OTHER: {first: false, second: 100}
  }
};

const FORM_NAME = 'filter';
const selector = formValueSelector(FORM_NAME)
const mapStateToProps = state => ({
  refill: state.form.filter ? state.form.filter.values.refill : false,
  decrease: state.form.filter ? state.form.filter.values.decrease : false,
})
function mapDispatchToProps(dispatch) {
  const actionMap = {forceSubmit: () => dispatch(submit('filter'))};
  return actionMap;
}

FilterForm = reduxForm({
  form: FORM_NAME
})(FilterForm)

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);


const filterKnownClient = {
    initSum: 300000,
    daysCount: 361,
    decrease: false,
    creditCard: true, //расчетное поле, считаем что для постоянных клиентов всегда да
    refill: true,     //расчетное поле, считаем что для постоянных клиентов всегда да
    payrollProject: false,
    monthRefillSum: 15000, //расчетное поле, считаем что для постоянных клиентов всегда да
    categories2Costs: {
      TRAVEL: {first: true, second: 100},
      FUN: {first: true, second: 100},
      AUTO: {first: false, second: 100},
      OTHER: {first: false, second: 100}
    },
    transactions: [
      {
        date: '2016-12-01',
        category2Cost: {
          TRAVEL: 443,
          FUN: 1123,
          AUTO: 1123,
          OTHER: 1123
        }
      }, {
        date: '2017-01-01',
        category2Cost: {
          TRAVEL: 443,
          FUN: 1123,
          AUTO: 1123,
          OTHER: 1123
        }
      }, {
        date: '2017-02-01',
        category2Cost: {
          TRAVEL: 443,
          FUN: 1123,
          AUTO: 1123,
          OTHER: 1123
        }
      }, {
        date: '2017-03-01',
        category2Cost: {
          TRAVEL: 443,
          FUN: 1123,
          AUTO: 1123,
          OTHER: 1123
        }
      }, {
        date: '2017-04-01',
        category2Cost: {
          TRAVEL: 443,
          FUN: 11230,
          AUTO: 7123,
          OTHER: 31123
        }
      }, {
        date: '2017-05-01',
        category2Cost: {
          TRAVEL: 443,
          FUN: 1123,
          AUTO: 1123,
          OTHER: 1123
        }
      }, {
        date: '2017-06-01',
        category2Cost: {
          TRAVEL: 443,
          FUN: 1123,
          AUTO: 1123,
          OTHER: 1123
        }
      }, {
        date: '2017-07-01',
        category2Cost: {
          TRAVEL: 443,
          FUN: 1123,
          AUTO: 1123,
          OTHER: 1123
        }
      },
    ],
    payroll: [
      {date: '2016-11-01', sum: 45000},
      {date: '2016-12-01', sum: 45000},
      {date: '2017-01-01', sum: 45000},
      {date: '2017-02-01', sum: 45000},
      {date: '2017-03-01', sum: 45000},
      {date: '2017-04-01', sum: 45000},
      {date: '2017-05-01', sum: 45000},
      {date: '2017-06-01', sum: 45000},
      {date: '2017-07-01', sum: 45000}
    ]
  }
  ;
