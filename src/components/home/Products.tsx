import React from 'react';
import { Row } from 'react-bootstrap';
import Product from 'components/common/Product';

const Products = () => {
  return (
    <div className="container my-5">
      <h2 className="mb-4">Latest Products</h2>
      <Row>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </Row>
    </div>
  );
};

export default Products;
