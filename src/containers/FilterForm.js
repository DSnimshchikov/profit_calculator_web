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
    const {handleSubmit} = this.props;
    return (
      <form onSubmit={ handleSubmit } onChange={() => setTimeout(handleSubmit, 100)}>
        <Filter refill={this.props.refill} decrease={this.props.decrease} handleSubmit={handleSubmit}/>
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
    TRAVEL: 100,
    FUN: 100,
    AUTO: 100,
    OTHER: 100
  }
};

const selector = formValueSelector('filter')
const mapStateToProps = state => ({
  refill: state.form.filter ? state.form.filter.values.refill : false,
  decrease: state.form.filter ? state.form.filter.values.decrease : false,
})

FilterForm = reduxForm({
  form: 'filter'
})(FilterForm)

export default connect(mapStateToProps)(FilterForm);
