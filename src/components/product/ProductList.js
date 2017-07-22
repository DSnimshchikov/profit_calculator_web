import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './product-list.cssmodule.less';
import Product from './Product';

class ProductList extends React.Component {

  render() {
    return (
      <div className="product-list-component container-fluid">
        {this.props.data.map((productGroup, index) =>
          <div key={index}>
            <Product data={productGroup}/>
          </div>
        )}
      </div>
    );
  }
}

ProductList.displayName = 'ProductList';
ProductList.propTypes = {};
ProductList.defaultProps = {};

export default cssmodules(ProductList, styles);
