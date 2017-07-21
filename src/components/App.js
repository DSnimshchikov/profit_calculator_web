import React from 'react';
import Filter from './Filter'
import Product from './product/Product'
import ProductList from './product/ProductList'
import {connect} from 'react-redux'
import './app.css';

var productList = [{
  "products": [
    {
      "product": {
        "id": null,
        "name": "Накопительный счет",
        "status": "ACTIVE",
        "createDate": null,
        "updateDate": null,
        "archiveDate": null,
        "type": "SAVING_ACCOUNT",
        "weight": 2,
        "rate1": null,
        "rate2": null,
        "rate3": null,
        "rate4": null
      },
      "notes": [
        "Очень выгодный продукт"
      ]
    },
    {
      "product": {
        "id": null,
        "name": "Карточный продукт",
        "status": null,
        "createDate": null,
        "updateDate": null,
        "archiveDate": null,
        "type": "CARD",
        "weight": 2,
        "cardType": "MIR",
        "category": "DEBIT",
        "bonusOption": "TRAVEL"
      },
      "notes": [
        "Очень выгодная карта"
      ]
    }
  ],
  "optionalProducts": null,
  "profitSum": 15900,
  "maxRate": 10
}];

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="index">
          <Filter/>
        </div>
        <div className="index" >
          <ProductList data={productList}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

App.defaultProps = {};
export default connect(mapStateToProps)(App)
