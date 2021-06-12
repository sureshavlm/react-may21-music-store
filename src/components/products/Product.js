import React from 'react';
import JSON from '../../data/products.json';
import ProductsList from './ProductsList';

class Product extends React.Component {

        constructor() {
            super();
            this.state = { products: JSON }

        }

        render() {
            return(
                <>
                 <ProductsList products = { this.state.products } />   
                </>
            );
        }
}

export default Product;