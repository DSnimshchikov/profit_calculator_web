import React from 'react'
import {connect} from 'react-redux';
import {Field, reduxForm, initialize, submit} from 'redux-form';
import Filter from '../components/filter/Filter';

class FilterForm extends React.Component {

  componentDidMount() {
    this.props.initialize(defaultFilter);
    this.props.onSubmit(defaultFilter);
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <form onSubmit={ handleSubmit } onChange={handleSubmit}>
        <Filter refill={this.props.refill} decrease={this.props.decrease}/>
      </form>
    )
  }
}

const defaultFilter = {
  initSum: 120000,
  daysCount: 181,
  decrease: false,
  refill: true,
  payrollProject: false,
  monthRefillSum: 10000,
  categories2Costs: {
    TRAVEL: 10000,
    FUN: 10000,
    AUTO: 10000,
    OTHER: 10000
  }
};

const mapStateToProps = state => ({
  refill: state.form.filter ? state.form.filter.values.refill : false,
  decrease: state.form.filter ? state.form.filter.values.decrease : false
})

FilterForm = reduxForm({
  form: 'filter'
})(FilterForm)

export default connect(mapStateToProps)(FilterForm);
