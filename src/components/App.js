import React from 'react';
import { Router, Route } from 'react-router';
import {connect} from 'react-redux';
import Filter from './Filter';
import ProductList from './product/ProductList';
import './app.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const productList = [
  {
    products: [
      {
        product: {
          id: null,
          name: 'Накопительный счет',
          createDate: null,
          updateDate: null,
          archiveDate: null,
          weight: 2,
          status: 'ACTIVE',
          type: 'SAVING_ACCOUNT',
          rate1: null,
          rate2: null,
          rate3: null,
          rate4: null
        },
        notes: [
          'Очень выгодный продукт'
        ]
      },
      {
        product: {
          id: null,
          name: 'Карточный продукт',
          createDate: null,
          updateDate: null,
          archiveDate: null,
          weight: 2,
          status: null,
          type: 'CARD',
          cardType: 'MIR',
          cardCategory: 'DEBIT',
          cardOptions: [
            {
              id: null,
              cardId: null,
              option: 'CASH_BACK',
              rate1: 1,
              rate2: 2,
              rate3: 3
            },
            {
              id: null,
              cardId: null,
              option: null,
              rate1: null,
              rate2: null,
              rate3: null
            }
          ]
        },
        notes: [
          'Очень выгодная карта'
        ]
      }
    ],
    optionalProducts: null,
    resultSum: 250000,
    profitSum: 15900,
    maxRate: 10
  },
  {
    products: [
      {
        product: {
          id: null,
          name: 'Накопительный счет',
          createDate: null,
          updateDate: null,
          archiveDate: null,
          weight: 2,
          status: 'ACTIVE',
          type: 'SAVING_ACCOUNT',
          rate1: null,
          rate2: null,
          rate3: null,
          rate4: null
        },
        notes: [
          'Очень выгодный продукт'
        ]
      },
      {
        product: {
          id: null,
          name: 'Карточный продукт',
          createDate: null,
          updateDate: null,
          archiveDate: null,
          weight: 2,
          status: null,
          type: 'CARD',
          cardType: 'MIR',
          cardCategory: 'DEBIT',
          cardOptions: [
            {
              id: null,
              cardId: null,
              option: 'CASH_BACK',
              rate1: 1,
              rate2: 2,
              rate3: 3
            },
            {
              id: null,
              cardId: null,
              option: null,
              rate1: null,
              rate2: null,
              rate3: null
            }
          ]
        },
        notes: [
          'Очень выгодная карта'
        ]
      }
    ],
    optionalProducts: null,
    resultSum: 220000,
    profitSum: 12900,
    maxRate: 9
  }
];

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="index">
          <Filter/>
        </div>
        <ProductList data={productList}/>
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
