import React from 'react'
import {connect} from 'react-redux'
import {Field, reduxForm, initialize, formValueSelector, submit} from 'redux-form'
import Filter from '../components/filter/Filter'

class FilterForm extends React.Component {

  componentWillMount() {
    if (this.props.clientId === '1') {
      this.props.loadFilter(filterKnownClient)
    }
  }

  componentDidMount() {
    if (this.props.clientId === '1') {
      this.props.initialize(filterKnownClient)
      this.props.onSubmit(filterKnownClient)
    } else {
      this.props.initialize(filterDefault)
      this.props.onSubmit(filterDefault)
      this.props.initialize(filterDefault)
    }
  }

  render() {
    const {handleSubmit, forceSubmit} = this.props
    return (
      <form onSubmit={handleSubmit} onChange={() => setTimeout(handleSubmit, 100)}>
        <Filter
          refill={this.props.refill} decrease={this.props.decrease} handleSubmit={handleSubmit}
          forceSubmit={forceSubmit} clientId={this.props.clientId}/>
      </form>
    )
  }
}

const FORM_NAME = 'filter'
const selector = formValueSelector(FORM_NAME)
const mapStateToProps = state => ({
  refill: state.form.filter ? state.form.filter.values.refill : false,
  decrease: state.form.filter ? state.form.filter.values.decrease : false
})
function mapDispatchToProps(dispatch) {
  const actionMap = {forceSubmit: () => dispatch(submit('filter'))}
  return actionMap
}

FilterForm = reduxForm({
  form: FORM_NAME
})(FilterForm)

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm)


const filterDefault = {
  filter: {
    initSum: 234000
  },
  initSum: 200000,
  daysCount: 181,
  decrease: false,
  refill: true,
  payrollProject: false,
  monthRefillSum: 10000,
  categories2Costs: {
    TRAVEL: {first: true, second: 10000},
    FUN: {first: true, second: 10000},
    AUTO: {first: false, second: 10000},
    OTHER: {first: false, second: 10000}
  }
}

const filterKnownClient = {
  initSum: 300000,
  daysCount: 361,
  decrease: false,
  creditCard: true, // расчетное поле, считаем что для постоянных клиентов всегда да
  refill: true,     // расчетное поле, считаем что для постоянных клиентов всегда да
  payrollProject: false,
  monthRefillSum: 15000, // расчетное поле, считаем что для постоянных клиентов всегда да
  categories2Costs: {
    TRAVEL: {first: true, second: 10000},
    FUN: {first: true, second: 10000},
    AUTO: {first: false, second: 10000},
    OTHER: {first: false, second: 10000}
  },
  clientProducts: [
    {
      idProduct: 1,
      name: 'Вклад "Накопительный"',
      accountBalances: [
        {first: '2017-01-01', second: 210000},
        {first: '2017-02-01', second: 211001},
        {first: '2017-03-01', second: 212002},
        {first: '2017-04-01', second: 213003},
        {first: '2017-05-01', second: 214004},
        {first: '2017-06-01', second: 215005},
        {first: '2017-07-01', second: 216006}
      ]
    }
  ],


  transactions: [
    {
      date: '2016-12-01',
      category2Cost: {
        TRAVEL: 0,
        FUN: 8000,
        AUTO: 5000,
        OTHER: 17000
      }
    }, {
      date: '2017-01-01',
      category2Cost: {
        TRAVEL: 0,
        FUN: 0,
        AUTO: 10000,
        OTHER: 20000
      }
    }, {
      date: '2017-02-01',
      category2Cost: {
        TRAVEL: 30000,
        FUN: 0,
        AUTO: 0,
        OTHER: 0
      }
    }, {
      date: '2017-03-01',
      category2Cost: {
        TRAVEL: 0,
        FUN: 0,
        AUTO: 10000,
        OTHER: 20000
      }
    }, {
      date: '2017-04-01',
      category2Cost: {
        TRAVEL: 0,
        FUN: 10000,
        AUTO: 5000,
        OTHER: 15000
      }
    }, {
      date: '2017-05-01',
      category2Cost: {
        TRAVEL: 10000,
        FUN: 0,
        AUTO: 10000,
        OTHER: 10000
      }
    }, {
      date: '2017-06-01',
      category2Cost: {
        TRAVEL: 0,
        FUN: 0,
        AUTO: 0,
        OTHER: 30000
      }
    }, {
      date: '2017-07-01',
      category2Cost: {
        TRAVEL: 0,
        FUN: 0,
        AUTO: 0,
        OTHER: 30000
      }
    },
  ],
  payroll: [
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

