import React from 'react';
import {Router, Route} from 'react-router';
import {connect} from 'react-redux';
import {FilterContainer} from './Filter';
import {ProductListContainer} from './product/ProductList';
import './app.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import filterProducts from '../actions';

const productList = [
  {
    products: [
      {
        id: null,
        name: 'Вклад',
        createDate: null,
        updateDate: null,
        archiveDate: null,
        weight: 2,
        status: 'ACTIVE',
        type: 'DEPOSIT',
        depositType: 'COMFORT',
        linkedProduct: null,
        rates: null,
        refillOption: null
      },
      {
        id: null,
        name: 'Карточный продукт',
        createDate: null,
        updateDate: null,
        archiveDate: null,
        weight: 2,
        status: null,
        type: 'CARD',
        linkedProduct: null,
        cardType: 'MIR',
        cardCategory: 'DEBIT',
        cardOption: {
          id: null,
          option: 'CASH_BACK',
          name: null,
          rate1: 2,
          rate2: 4,
          rate3: 10,
          rate: 5
        }
      }
    ],
    optionalProducts: null,
    notes: [
      'Очень выгодный продукт'
    ],
    resultSum: 240000,
    profitSum: 14900,
    maxRate: 9
  }
];

class App extends React.Component {

  constructor(props) {
    super(props);
    // this.setState({'productList': productList});
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
          <ProductListContainer data={productList}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  debugger;
  return {
    productListData: state.filterReducer
  };
}

App.defaultProps = {};
export default connect(mapStateToProps)(App);
