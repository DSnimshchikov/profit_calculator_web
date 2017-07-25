import React from 'react';
import {Router, Route} from 'react-router';
import {connect} from 'react-redux';
import {FilterContainer} from './Filter';
import {ProductListContainer} from './product/ProductList';
import './app.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import filterProducts from '../actions';

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log('set productList in main app ');
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <h2 className="b-deposits-calculator--title col-md-4 col-md-offset-4 centered">
            Подбор продукта для клиента ВТБ24</h2>
        </div>
        <div className="index col-md-4">
          <FilterContainer />
        </div>
        <div className="col-md-8">
          <ProductListContainer data={this.props.productListData}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    productListData: state.filterReducer.productList
  };
}

App.defaultProps = {};
export default connect(mapStateToProps)(App);
