import React from 'react';
import products from '../data/products';

const SelectionBox = ({changeSelectedProductHandler}, selectedProduct) => {
  return (
    <div id="selectionBox">
      <ul className="products">
        {products.map((product) => {
          return (
            <li key={product.id} onClick={() => changeSelectedProductHandler(product)}>
              <img src={product.image}/>
              <span>{product.name}</span>
              <br/>
              <span>${product.price.toFixed(2)}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SelectionBox;