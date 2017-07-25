import {FILTER_PRODUCT} from "../actions/const";
import {fetchProductSuccess} from "../actions/";

const initialState = {
  productList: [
  ]
};

function setState(state, newState) {
  return Object.assign(state, newState); //merger old and new state
}

function FilterReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_PRODUCT: {
      console.log("reduce action FILTER_PRODUCT");
      return fetchProducts(action.parameter);
    }
    default: {
      return state;
    }
  }
}


function fetchProducts(param) {
  return    { productList: [
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
  ]};
  // return dispatch => {
  ////   dispatch(filterProducts(param)); возможно надо уведомить о начале и окончании загрузки
  //   fetch('http://localhost:8080/products?initSum=100000&daysCount=181&monthRefillSum=10000&monthWithdrawalSum=100', {method: 'get'})
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  //   .then(json => this.setState({'productList': json}))
  //   .catch(function (error) {
  //     console.log('Request failed', error);
  //   });

}

module.exports = FilterReducer;
