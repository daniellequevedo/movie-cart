import { connect } from 'react-redux';
import DisplayBox from '../components/DisplayBox';

const mapStateToProps = state => state.selectedProduct;

export default connect(mapStateToProps)(DisplayBox);