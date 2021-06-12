import React from 'react';
import react from 'react';
import "./Product.css";

const ProductsList = (props) => {

    const generateProducts = ( products ) => {
        console.log(products);
       if(products){
           return products.map( product => {
               console.log('**** Data: ', product);
               return(               
                <div key = {product.id}>
                    <div className = "row">
                        <div className = "card">
                            <h3>Name: { product.name}</h3>
                            <p>Price: {product.price}</p>
                            <p>Type: {product.type}</p>
                            <p>Descriptions: {product.description}</p>
                        </div>
                    </div>
                </div>
               )
           });
       }
    }

    return(
        <div>
            { generateProducts(props.products) }
        </div>
    );

}

export default ProductsList;