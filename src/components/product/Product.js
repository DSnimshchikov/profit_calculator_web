import React from 'react';
import PropTypes from 'prop-types';
import cssmodules from 'react-css-modules';
import CirclePie from 'react-simple-charts';
import styles from './product.cssmodule.less';


class Product extends React.Component {

  searchCashBackOption() {
    const products = this.props.data.products;
    const arrayOfCardOptions = products.filter(p => p.product.type === 'CARD').map(p => p.product.cardOptions);
    return [].concat.apply([], arrayOfCardOptions).find(co => co.option === 'CASH_BACK');
  }

  buildCardName() {
    const products = this.props.data.products;
    return products.map(p => p.product.name).join(' + ');
  }

  renderCashBackIfNecessarry(products) {
    const cahsBackOption = this.searchCashBackOption(products);
    if (cahsBackOption !== undefined) {
      return (<div className="row">
        <div className="col-md-6">
          <p>Кэшбек, %</p>
        </div>
        <div className="col-md-6">
          <b>{cahsBackOption.rate1}</b>
        </div>
      </div>);
    }
    return '';
  }

  render() {
    const productGroup = this.props.data;
    const products = productGroup.products;
    return (
      <div className="product-card ">
        <div className="product-card-header">{this.buildCardName(products)}</div>
        <div className="product-card-content-wrap">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6">
                  <p>Доход по вкладу</p>
                </div>
                <div className="col-md-6">
                  <b className="income">{productGroup.resultSum}</b>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <p>Сумма в конце срока</p>
                </div>
                <div className="col-md-6">
                  <b className="sum">{productGroup.profitSum}</b>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <p>Ставка, %</p>
                </div>
                <div className="col-md-6">
                  <b>{productGroup.maxRate}</b>
                </div>
              </div>
              {this.renderCashBackIfNecessarry(products)}
              <div className="row">
                <div className="col-md-6">
                  <p>{'Баллы "Коллекция"'}</p>
                </div>
                <div className="col-md-6">
                  <b>50</b>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              Тут лояльность и диаграмма
            </div>
          </div>
        </div>
      </div>

    );
  }
}

Product.displayName = 'Product';
Product.propTypes = {
  data: PropTypes.object // eslint-disable-line react/forbid-prop-types
};
Product.defaultProps = {};

export default cssmodules(Product, styles);
