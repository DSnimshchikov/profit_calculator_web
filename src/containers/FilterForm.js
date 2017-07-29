import React from 'react'
import {connect} from 'react-redux';
import {Field, reduxForm, initialize, formValueSelector, submit} from 'redux-form';
import Filter from '../components/filter/Filter';

class FilterForm extends React.Component {

  componentDidMount() {
    this.props.initialize(defaultFilter);
    this.props.onSubmit(defaultFilter);
  }

  render() {
    const {handleSubmit, forceSubmit} = this.props;
    return (
      <form onSubmit={ handleSubmit } onChange={() => setTimeout(handleSubmit, 100)}>
        <Filter refill={this.props.refill} decrease={this.props.decrease} handleSubmit={handleSubmit} forceSubmit={forceSubmit}/>
      </form>
    )
  }
}

const defaultFilter = {
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
const selector = formValueSelector({FORM_NAME})
const mapStateToProps = state => ({
  refill: state.form.filter ? state.form.filter.values.refill : false,
  decrease: state.form.filter ? state.form.filter.values.decrease : false,
})

const mapDispatchToProps = (dispatch) => ({
  forceSubmit: dispatch(submit({FORM_NAME}))
})

FilterForm = reduxForm({
  form: {FORM_NAME}
})(FilterForm)

export default connect(mapStateToProps)(FilterForm);
