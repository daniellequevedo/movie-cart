import { connect } from 'react-redux';
import { changeProductSelected } from '../actions';
import SelectionBox from '../components/SelectionBox';

const mapStateToProps = (state) => {
    return {selectedProduct: state.selectedProduct};
};

const mapDispatchToProps = (dispatch) => {
    return({changeSelectedProductHandler: (selectedProduct) => {
        dispatch(changeProductSelected(selectedProduct))
    }});
};

const ChangeSelectedProduct = connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectionBox);

export default ChangeSelectedProduct;