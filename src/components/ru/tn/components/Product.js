import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './product.cssmodule.less';

class Product extends React.Component {

  render() {
    return (
      <div className="product-card--content-right raised">
        <div className="product-card--content-right--head"> «Мультикарта ВТБ24»<br/> с опцией «Сбережения»</div>
        <div className="product-card--content-wrap">
          <div className="product-card--content-right--value"><b className="income">25, 000</b> <p>Доход по вкладу</p></div>
          <div className="product-card--content-right--value"><b className="sum">125, 000</b> <p>Сумма в конце срока</p></div>
          <div className="product-card--content-right--value"><b>10%</b> <p>Ставка</p></div>
          <div className="product-card--content-right--value"><b>5</b> <p>Срок</p></div>
          <div className="product-card--content-right--value"><b>5</b> <p>Срок</p></div>
          <div className="product-card--content-right--value"><b>5</b> <p>Срок</p></div>
          <div className="product-card--content-right--value"><b>5</b> <p>Срок</p></div>
        </div>
        <a href="https://www.vtb24.ru/cards/debit/request/#/1601/00/01/01/03" className="product-card--submit">Заказать Мультикарту</a>
      </div>
    );
  }
}

Product.displayName = 'Product';
Product.propTypes = {};
Product.defaultProps = {};

export default cssmodules(Product, styles);
