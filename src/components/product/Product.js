import React from 'react'
import PropTypes from 'prop-types'
import cssmodules from 'react-css-modules'
import Doughnut from 'react-chartjs-2'
import {Tooltip, OverlayTrigger, Button} from 'react-bootstrap'

import styles from './product.cssmodule.less'
import ProductCardRow from './ProductCardRow'

class Product extends React.Component {

  static getCardOptionName(cardOption) {
    if (cardOption !== null) {
      if (cardOption.bonusOption === 'CASH_BACK') {
        return 'Кэшбэк '
      } else if (cardOption.bonusOption === 'COLLECTION') {
        return 'Баллы "Коллекция"'
      } else if (cardOption.bonusOption === 'AUTO') {
        return 'Кэшбэк Авто'
      } else if (cardOption.bonusOption === 'FUN') {
        return 'Кэшбэк Развлечения'
      } else if (cardOption.bonusOption === 'TRAVEL') {
        return 'Мили Путешествия'
      } else if (cardOption.bonusOption === 'SAVING') {
        return 'Опция Сбережения'
      } else if (cardOption.bonusOption === 'RZD') {
        return 'Баллы РЖД'
      }
    }
    return ''
  }

  static getCardOption(products) {
    const arrayOfCardOptions = products.filter(p => p.type === 'CARD').map(p => p.cardOption)
    if (arrayOfCardOptions !== undefined && arrayOfCardOptions.length > 0) {
      return arrayOfCardOptions[0]
    }
    return null
  }

  static buildCardName(products) {
    const cards = products.filter(p => p.type === 'CARD')
    const baseProduct = products.find(p => p.type !== 'CARD')
    let resultName = baseProduct.name
    if (baseProduct.type === 'DEPOSIT') {
      resultName = `Вклад "${resultName}"`
    }

    if (cards !== undefined && cards.length) {
      const card = cards[0]
      resultName += ' + Мультикарта'
      if (cards.length > 1) {
        resultName += ' Кредит/Дебeт'
      } else if (card.cardCategory === 'DEBIT') {
        resultName += ' Дебeт'
      } else {
        resultName += ' Кредит'
      }
      if (card !== null && card !== undefined) {
        const cardOption = card.cardOption
        if (cardOption !== undefined && cardOption !== null) {
          if (cardOption.bonusOption === 'CASH_BACK') {
            resultName += ' + Кэшбэк'
          } else if (cardOption.bonusOption === 'COLLECTION') {
            resultName += ' + Баллы "Коллекция"'
          } else if (cardOption.bonusOption === 'AUTO') {
            resultName += ' с опцией Авто'
          } else if (cardOption.bonusOption === 'FUN') {
            resultName += ' с опцией Развлечения'
          } else if (cardOption.bonusOption === 'TRAVEL') {
            resultName += ' с опцией Путешествия'
          } else if (cardOption.bonusOption === 'SAVING') {
            resultName += ' с опцией Сбережения'
          } else if (cardOption.bonusOption === 'RZD') {
            resultName += ' с опцией РЖД'
          }
        }
      }
    }
    return resultName
  }

  render() {
    const productGroup = this.props.data.productGroup
    const products = productGroup.products
    const cardOption = Product.getCardOption(products)
    const cardOptionName = Product.getCardOptionName(cardOption)
    const card = products.find(p => p.type === 'CARD')
    const colorCurrentSum = '#80e0b0'
    const colorDiffSum = '#BBBBBB'
    const chartData = {
      labels: [
        'Текущее предложение',
        'Разница с лучшим'
      ],
      datasets: [{
        data: [productGroup.profitSum, this.props.data.bestProfitSum - productGroup.profitSum],
        backgroundColor: [
          colorCurrentSum,
          colorDiffSum
        ],
        hoverBackgroundColor: [
          colorCurrentSum,
          colorDiffSum
        ]
      }]
    }

    console.log(JSON.stringify(chartData))

    const chartOptions = {
      tooltips: {
        enabled: false
      },
      legend: {
        display: false,
        fullWidth: false
      },
      maintainAspectRatio: true
    }

    function createMarkup(data) {

      return {__html: data.join(' ')}
    }

    return (

      <div className={`${styles.card} .effect2`}>
        <div className={styles['card-header']}>
          <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip"><div dangerouslySetInnerHTML={createMarkup(this.props.data.productGroup.notes)} /></Tooltip>}>
            <span>
              {Product.buildCardName(products)}
            </span>
          </OverlayTrigger>
        </div>
        <div className={styles['card-content-wrap']}>
          <div className={`${styles['aligned-row']} row`}>
            <div className="col-md-7">
              <ProductCardRow rowName={'Ставка, %'} rowValue={productGroup.maxRate} rowType={'RATE'}/>
              <ProductCardRow rowName={'Доход по вкладу'} rowValue={productGroup.profitSum} rowType={'PROFIT'}/>
              <ProductCardRow rowName={'Сумма в конце срока'} rowValue={productGroup.resultSum} rowType={'OTHER'}/>
              {cardOption !== null && productGroup.optionProfitSum != null &&
              <ProductCardRow rowName={cardOptionName} rowValuePrefix="+" rowValue={productGroup.optionProfitSum} rowType={'OTHER'}/>
              }
            </div>
            <div className="col-md-5 col-centered">
              <div className={styles['pie-chart-container']}>
                <Doughnut data={chartData} options={chartOptions}/>
              </div>
              {card !== undefined && <div>
                <a className={`btn ${styles['card-btn']}`} href="/static/loyality.pdf" target="_blank">ПРОГРАММА ЛОЯЛЬНОСТИ</a>
              </div>}
            </div>
          </div>
        </div>
      </div>

    )
  }
}

Product
  .displayName = 'Product'
Product
  .propTypes = {
    data: PropTypes.object // eslint-disable-line react/forbid-prop-types
  }
Product
  .defaultProps = {}

export default cssmodules(Product, styles)
