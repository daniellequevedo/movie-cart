import products from '../data/products';

const selectedProduct = (state={selectedProduct: products[1]}, action) => {
    switch (action.type) {
        case 'CHANGE_SELECTED_PRODUCT':
            console.log(`state's selectedProduct: `, action.selectedProduct);
            return(
                {
                    selectedProduct: action.selectedProduct
                }
            );
        default: 
            return state;
    }
}

export default selectedProduct;