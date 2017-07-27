import React from 'react'
import {connect} from 'react-redux'
import {filterProducts} from '../actions'
import {Filter} from '../components/filter/Filter'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({})

const ProductFilter = ({todos, actions}) => (
  <div>
  </div>
)
const mapDispatchToProps = {
  onFilterClick: filterProducts
}

export default connect( mapStateToProps, mapDispatchToProps)(ProductFilter);
