import React from 'react';
import {connect} from 'react-redux';
import cssmodules from 'react-css-modules';
import PropTypes from 'prop-types';
import styles from './product.cssmodule.less';
import Product from './Product';

class ProductList extends React.Component {
  render() {
    return (
      <div className="product-list-component container-fluid">
        {this.props.data && this.props.data.length && this.props.data.map((productGroup, index) => {
          const data = {productGroup, bestProfitSum: Math.max(...this.props.data.map(o => o.profitSum))};
          return (<div key={index}>
            <Product data={data}/>
          </div>);
        }
        )}
      </div>
    );
  }
}
ProductList.displayName = 'ProductList';
ProductList
  .propTypes = {
    data: PropTypes.array // eslint-disable-line react/forbid-prop-types
  };
ProductList.defaultProps = {};

function mapStateToProps(state) {
  return {
    data: state.filterReducer.productList
  };
}
function mapDispatchToProps(dispatch) {
  return {};
}

export const ProductListContainer = connect(mapStateToProps, mapDispatchToProps)(cssmodules(ProductList, styles));
