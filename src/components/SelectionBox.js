import React from 'react';
import products from '../data/products';

const SelectionBox = ({changeSelectedProductHandler}, selectedProduct) => {
  return (
    <div id="selectionBox">
      <ul className="products">
        {products.map((item) => {
          return (
            <li key={item.id} onClick={() => changeSelectedProductHandler(item)}>
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SelectionBox;