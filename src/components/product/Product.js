import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './product.cssmodule.less';

class Product extends React.Component {

  render() {
    return (
      <div className="product-card ">
        <div className="product-card-header"> «Мультикарта ВТБ24» с опцией «Сбережения»</div>
        <div className="product-card-content-wrap">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6">
                  <p>Доход по вкладу</p>
                </div>
                <div className="col-md-6">
                  <b className="income">{this.props.data.resultSum}</b>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <p>Сумма в конце срока</p>
                </div>
                <div className="col-md-6">
                  <b className="sum">{this.props.data.profitSum}</b>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <p>Ставка, %</p>
                </div>
                <div className="col-md-6">
                  <b>10</b>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <p>Кэшбек, %</p>
                </div>
                <div className="col-md-6">
                  <b>5</b>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <p>Баллы "Коллекция"</p>
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
Product.propTypes = {};
Product.defaultProps = {};

export default cssmodules(Product, styles);
