import React from 'react';

const DisplayBox = ({ selectedProduct }) => {
  return (
    <div id="displayBox">
      <p>{selectedProduct}</p>
      {/* <img class="displayImg" src="${selectedProduct.image}" />
      <div class="displayDetails">
        <h4>${selectedProduct.name}&nbsp;<span>(${selectedProduct.year})</span></h4>
        <div class="scrollBox">
          <p>${selectedProduct.description}</p>
        </div>
        <div class="footer">
          <p>Rating: ${selectedProduct.rating} / 10 stars</p>
        </div>
        <div class="footer">
          <p>Price: $${selectedProduct.price.toFixed(2)}</p>
        </div>
        <div class="footer">
          <p>Runtime: ${selectedProduct.runtime} minutes</p>
        </div>
        <div class="footer">
          <button class="add-to-cart" data-id="${selectedProduct.id}">Add To Cart</button>
        </div>
      </div> */}
    </div>
  );
}

export default DisplayBox;