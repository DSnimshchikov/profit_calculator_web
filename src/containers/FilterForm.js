import React from 'react'
import {connect} from 'react-redux';
import {Field, reduxForm, initialize, submit} from 'redux-form';
import Filter from '../components/filter/Filter';
import {loadProducts} from '../actions/filter-action'

class FilterForm extends React.Component {

  componentDidMount() {
    this.props.initialize({
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
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log("***************** ");
    this.onChange(nextProps);
  }

  onChange(nextProps) {
    if (nextProps.dirty && nextProps.valid && nextProps.values !== this.props.values) {
      this.props.submitForm()
    }
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <form onSubmit={ handleSubmit(onSubmit) } onChange={() => setTimeout(handleSubmit(params => onChange(params)))}>>
        <Filter refill={this.props.refill} decrease={this.props.decrease}/>
      </form>
    )
  }

  // this.props.requestProducts(this.makePayload());
}

function mapDispatchToProps(dispatch) {
  submitForm: dispatch(submit('filter'))
}

const mapStateToProps = state => ({
  refill: state.form.filter ? state.form.filter.values.refill : false,
  decrease: state.form.filter ? state.form.filter.values.decrease : false
})

const onSubmit = values => ({})

FilterForm = reduxForm({
  form: 'filter'
})(FilterForm)

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);
