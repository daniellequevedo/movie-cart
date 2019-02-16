import React from 'react';

const SelectionBox = ({changeSelectedProductHandler}, selectedProduct) => {
  return (
    <div id="selectionBox">
      <ul className="products">
        {/* <!-- Populate this from JS --> */}
        <li onClick={() => changeSelectedProductHandler('Movie 1')}>Movie1</li>
        <li onClick={() => changeSelectedProductHandler('Movie 2')}>Movie2</li>
      </ul>
    </div>
  );
}

export default SelectionBox;