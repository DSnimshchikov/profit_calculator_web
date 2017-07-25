import React from 'react';
import PropTypes from 'prop-types';
import cssmodules from 'react-css-modules';
import Doughnut from 'react-chartjs-2';
import styles from './product.cssmodule.less';
import ProductCardRow from './ProductCardRow';


class Product extends React.Component {

  static getCardOptionName(cardOption) {
    if (cardOption !== null) {
      if (cardOption.option === 'CASH_BACK') {
        return 'Кэшбэк %';
      } else if (cardOption.option === 'COLLECTION') {
        return 'Баллы "Коллекция"';
      } else if (cardOption.option === 'AUTO') {
        return 'Категория Авто';
      } else if (cardOption.option === 'CAFE') {
        return 'Категория Кафе';
      } else if (cardOption.option === 'TRAVEL') {
        return 'Категория Путешествия';
      } else if (cardOption.option === 'SAVING') {
        return 'Опция Сбережения';
      }
    }
    return '';
  }

  static getCardOption(products) {
    const arrayOfCardOptions = products.filter(p => p.type === 'CARD').map(p => p.cardOption);
    if (arrayOfCardOptions !== undefined && arrayOfCardOptions.length > 0) {
      return arrayOfCardOptions[0];
    }
    return null;
  }

  static buildCardName(products) {
    const card = products.find(p => p.type === 'CARD');
    const baseProduct = products.find(p => p.type !== 'CARD');
    let resultName = baseProduct.name;
    if (baseProduct.type === 'DEPOSIT') {

      if (baseProduct.depositType === 'COMFORT') {
        resultName += ' "Комфортный" ';
      } else if (baseProduct.depositType === 'ACCUMULATIVE') {
        resultName += ' "Накопительный" ';
      } else if (baseProduct.depositType === 'PROFITABLE') {
        resultName += ' "Выгодный" ';
      }
    }
    if (card !== null && card !== undefined) {
      resultName += ' + Мультикарта';
      const cardOption = card.cardOption;
      if (cardOption !== undefined) {
        if (cardOption.option === ' CASH_BACK') {
          resultName += ' + Кэшбэк';
        } else if (cardOption.option === 'COLLECTION') {
          resultName += ' + Баллы "Коллекция"';
        } else if (cardOption.option === 'AUTO') {
          resultName += ' с опцией Авто';
        } else if (cardOption.option === 'CAFE') {
          resultName += ' с опцией Кафе';
        } else if (cardOption.option === 'TRAVEL') {
          resultName += ' с опцией Путешествия';
        } else if (cardOption.option === 'SAVING') {
          resultName += ' с опцией Сбережения';
        }
      }
    }
    return resultName;
  }

  onButtonClick (event) {
    alert('sdfsd');
  }

  render() {
    const productGroup = this.props.data.productGroup;
    const products = productGroup.products;
    const cardOption = Product.getCardOption(products);
    const cardOptionName = Product.getCardOptionName(cardOption);
    const card = products.find(p => p.type === 'CARD');
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
        <div className={styles['card-header']}>{Product.buildCardName(products)}</div>
        <div className={styles['card-content-wrap']}>
          <div className="row">
            <div className="col-md-7">
              <ProductCardRow rowName={'Доход по вкладу'} rowValue={productGroup.profitSum} rowType={'INCOME'}/>
              <ProductCardRow rowName={'Сумма в конце срока'} rowValue={productGroup.resultSum} rowType={'SUM'}/>
              <ProductCardRow rowName={'Ставка, %'} rowValue={productGroup.maxRate} rowType={'OTHER'}/>
              {cardOption !== null &&
              <ProductCardRow rowName={cardOptionName} rowValue={cardOption.rate} rowType={'OTHER'}/>
              }
            </div>
            <div className="col-md-5 col-centered">
              <div className={styles['pie-chart-container']}>
                <Doughnut data={chartData} options={chartOptions}/>
              </div>
              {card !== undefined && <div>
                <a className={`${styles['card-btn']} btn btn-success`} href="static/loyality.pdf" target="_blank">Программа лояльности</a>
              </div>}
            </div>
          </div>
        </div>
      </div>

    );
  }
}

Product
  .displayName = 'Product';
Product
  .propTypes = {
    data: PropTypes.object // eslint-disable-line react/forbid-prop-types
  };
Product
  .defaultProps = {};

export default cssmodules(Product, styles);
