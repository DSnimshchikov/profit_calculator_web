import React from 'react';
import {connect} from 'react-redux';
import FilterForm from '../containers/FilterForm';
import {ProductListContainer} from './product/ProductList';
import './app.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <h2 className="b-deposits-calculator--title col-md-4 col-md-offset-4 centered">
            Подбор продукта для клиента ВТБ24</h2>
        </div>
        <div className="index col-md-4">
          <FilterForm onSubmit={this.props.actions.loadProducts}/>
        </div>
        <div className="col-md-8">
          <ProductListContainer/>
        </div>
      </div>
    );
  }
}

App.defaultProps = {};
export default App;
