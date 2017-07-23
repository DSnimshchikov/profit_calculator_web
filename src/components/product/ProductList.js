import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './product-list.cssmodule.less';
import Product from './Product';

class ProductList extends React.Component {
  render() {
    return (
      <div className="product-list-component container-fluid">
        {this.props.data.map((productGroup, index) => {
          const datadd = {productGroup, bestProfitSum: this.props.data[0].profitSum};
          return (<div key={index}>
            <Product data={datadd}/>
          </div>);
        }
        )}
      </div>
    );
  }
}
ProductList.displayName = 'ProductList';
ProductList.propTypes = {};
ProductList.defaultProps = {};

export default cssmodules(ProductList, styles);
