import React from 'react';

const DisplayBox = ({ selectedProduct }) => {
  return (
    <div id="displayBox">
      <img className="displayImg" src={selectedProduct.image} />
      <div className="displayDetails">
        <h4>{selectedProduct.name}&nbsp;<span>({selectedProduct.year})</span></h4>
        <div className="scrollBox">
          <p>{selectedProduct.description}</p>
        </div>
        <div className="footer">
          <p>Rating: {selectedProduct.rating} / 10 stars</p>
        </div>
        <div className="footer">
          <p>Price: ${selectedProduct.price.toFixed(2)}</p>
        </div>
        <div className="footer">
          <p>Runtime: {selectedProduct.runtime} minutes</p>
        </div>
        <div className="footer">
          <button className="add-to-cart" data-id={selectedProduct.id}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default DisplayBox;