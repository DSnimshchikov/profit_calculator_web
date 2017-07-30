import React from 'react'
import {connect} from 'react-redux';
import {Field, reduxForm, initialize, formValueSelector, submit} from 'redux-form';
import Filter from '../components/filter/Filter';

class FilterForm extends React.Component {

  componentDidMount() {
    if (this.props.clientId==='1') {
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
                forceSubmit={forceSubmit}/>
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
    refill: true,
    payrollProject: false,
    monthRefillSum: 15000,
    categories2Costs: {
      TRAVEL: {first: true, second: 100},
      FUN: {first: true, second: 100},
      AUTO: {first: false, second: 100},
      OTHER: {first: false, second: 100}
    },
    transactions: [
      {
        date: '',
        category2Cost: [
          {category: 'TRAVEL', sum: 443},
          {category: 'FUN', sum: 1123},
          {category: 'AUTO', sum: 1123},
          {category: 'OTHER', sum: 1123}
        ]
      },{
        date: '',
        category2Cost: [
          {category: 'TRAVEL', sum: 443},
          {category: 'FUN', sum: 1123},
          {category: 'AUTO', sum: 1123},
          {category: 'OTHER', sum: 1123}
        ]
      },{
        date: '',
        category2Cost: [
          {category: 'TRAVEL', sum: 443},
          {category: 'FUN', sum: 1123},
          {category: 'AUTO', sum: 1123},
          {category: 'OTHER', sum: 1123}
        ]
      },{
        date: '',
        category2Cost: [
          {category: 'TRAVEL', sum: 443},
          {category: 'FUN', sum: 1123},
          {category: 'AUTO', sum: 1123},
          {category: 'OTHER', sum: 1123}
        ]
      },{
        date: '',
        category2Cost: [
          {category: 'TRAVEL', sum: 443},
          {category: 'FUN', sum: 1123},
          {category: 'AUTO', sum: 1123},
          {category: 'OTHER', sum: 1123}
        ]
      },{
        date: '',
        category2Cost: [
          {category: 'TRAVEL', sum: 443},
          {category: 'FUN', sum: 1123},
          {category: 'AUTO', sum: 1123},
          {category: 'OTHER', sum: 1123}
        ]
      },{
        date: '',
        category2Cost: [
          {category: 'TRAVEL', sum: 443},
          {category: 'FUN', sum: 1123},
          {category: 'AUTO', sum: 1123},
          {category: 'OTHER', sum: 1123}
        ]
      },{
        date: '',
        category2Cost: [
          {category: 'TRAVEL', sum: 443},
          {category: 'FUN', sum: 1123},
          {category: 'AUTO', sum: 1123},
          {category: 'OTHER', sum: 1123}
        ]
      },
    ],
    payroll: [
      {date: '', sum: 123},
      {date: '', sum: 123},
      {date: '', sum: 123},
      {date: '', sum: 123},
      {date: '', sum: 123},
      {date: '', sum: 123},
      {date: '', sum: 123},
      {date: '', sum: 123},
      {date: '', sum: 123}
    ]
  }
  ;
