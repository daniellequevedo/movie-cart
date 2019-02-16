const selectedProduct = (state={selectedProduct: 'Movie1'}, action) => {
    switch (action.type) {
        case 'CHANGE_SELECTED_PRODUCT':
            console.log(action.selectedProduct);
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