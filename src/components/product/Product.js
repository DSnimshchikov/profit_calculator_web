import React from 'react';
import PropTypes from 'prop-types';
import cssmodules from 'react-css-modules';
import Doughnut from 'react-chartjs-2';
import styles from './product.cssmodule.less';
import ProductCardRow from './ProductCardRow';


class Product extends React.Component {


  searchCashBackOption() {
    const products = this.props.data.productGroup.products;
    const arrayOfCardOptions = products.filter(p => p.product.type === 'CARD').map(p => p.product.cardOptions);
    return [].concat.apply([], arrayOfCardOptions).find(co => co.option === 'CASH_BACK');
  }

  buildCardName() {
    const products = this.props.data.productGroup.products;
    return products.map(p => p.product.name).join(' + ');
  }
  render() {
    const productGroup = this.props.data.productGroup;
    const products = productGroup.products;
    const cahsBackOption = this.searchCashBackOption(products);

    const colorCurrentSum = '#36A2EB';
    const colorDiffSum = '#BBBBBB';
    const chartData = {
      labels: [
        'Текущее предложение',
        'Разница с лучшим'
      ],
      datasets: [{
        data: [this.props.data.bestProfitSum, this.props.data.bestProfitSum - productGroup.profitSum],
        backgroundColor: [
          colorCurrentSum,
          colorDiffSum
        ],
        hoverBackgroundColor: [
          colorCurrentSum,
          colorDiffSum
        ]
      }]
    };

    const chartOptions = {
      legend:
      {
        display: false,
        position: 'bottom',
        fullWidth: false
      }
    };

    return (
      <div className={styles.card}>
        <div className={styles['card-header']}>{this.buildCardName(products)}</div>
        <div className={styles['card-content-wrap']}>
          <div className="row">
            <div className="col-md-7">
              <ProductCardRow rowName={'Доход по вкладу'} rowValue={productGroup.profitSum} rowType={'INCOME'}/>
              <ProductCardRow rowName={'Сумма в конце срока'} rowValue={productGroup.resultSum} rowType={'SUM'}/>
              <ProductCardRow rowName={'Ставка, %'} rowValue={productGroup.maxRate} rowType={'OTHER'}/>
              {cahsBackOption !== undefined &&
                <ProductCardRow rowName={'Кэшбек, %'} rowValue={cahsBackOption.rate1} rowType={'OTHER'}/>
              }
              <ProductCardRow rowName={'Баллы "Коллекция"'} rowValue={50} rowType={'OTHER'}/>
            </div>
            <div className="col-md-5 col-centered">
              <div className={styles['pie-chart-container']}>
                <Doughnut data={chartData} options={chartOptions}/>
              </div>
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
