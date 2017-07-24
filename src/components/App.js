import React from 'react';
import {Router, Route} from 'react-router';
import {connect} from 'react-redux';
import Filter from './Filter';
import ProductList from './product/ProductList';
import './app.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const productList = [
  {
    products: [
      {
        id: null,
        name: 'Накопительный счет',
        createDate: null,
        updateDate: null,
        archiveDate: null,
        weight: 2,
        status: 'ACTIVE',
        type: 'SAVING_ACCOUNT',
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
          option: 'TRAVEL',
          name: null,
          rate1: 2,
          rate2: 4,
          rate3: 10,
          rate: 500
        }
      }
    ],
    optionalProducts: null,
    notes: [
      'Очень выгодный продукт'
    ],
    resultSum: 250000,
    profitSum: 15900,
    maxRate: 10
  },

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
  },

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
        depositType: 'PROFITABLE',
        linkedProduct: null,
        rates: null,
        refillOption: null
      }
    ],
    optionalProducts: null,
    notes: [
      'Очень выгодный продукт'
    ],
    resultSum: 232000,
    profitSum: 12900,
    maxRate: 7
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
          <Filter/>
        </div>
        <div className="col-md-8">
          <ProductList data={productList}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

App.defaultProps = {};
export default connect(mapStateToProps)(App);
