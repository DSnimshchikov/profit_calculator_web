import React from 'react';
import PropTypes from 'prop-types';
import cssmodules from 'react-css-modules';
import CountUp from 'react-countup';
import styles from './product.cssmodule.less';


class ProductCardRow extends React.Component {

  renderValue() {
    return (<nobr>
      <CountUp start={0} end={this.props.rowValue} duration={0.75} separator={' '} useGrouping/>
    </nobr>);
  }

  render() {
    return (
      <div className={`${styles['aligned-row']} row`}>
        <div className={'col-md-7'}>
          <p>{this.props.rowName}</p>
        </div>
        <div className="col-md-5 text-right">

          {this.props.rowType === 'INCOME' &&
          <b className={styles.income}>
            {this.renderValue()}
          </b>
          }

          {this.props.rowType === 'SUM' &&
          <b className={styles.sum}>
            {this.renderValue()}
          </b>
          }

          {this.props.rowType !== 'INCOME' && this.props.rowType !== 'SUM' &&
          <b>
            {this.renderValue()}
          </b>
          }
        </div>
      </div>
    )
      ;
  }


}

ProductCardRow.displayName = 'ProductCardRow';
ProductCardRow.propTypes = {
  rowName: PropTypes.string,
  rowValue: PropTypes.number,
  rowType: PropTypes.string
};
ProductCardRow.defaultProps = {};

export default cssmodules(ProductCardRow, styles);
