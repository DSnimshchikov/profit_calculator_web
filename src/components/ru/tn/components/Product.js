import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './product.cssmodule.less';

class Product extends React.Component {

  render() {
    return (
      <div className="product-component" styleName="product-component">
        Please edit src/components/Product.js to update this component!
      </div>
    );
  }
}

Product.displayName = 'Product';
Product.propTypes = {};
Product.defaultProps = {};

export default cssmodules(Product, styles);
