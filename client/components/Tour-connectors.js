import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Tour from './Tour';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const TourConnectors = connect(null, mapDispatchToProps)(Tour);

export default TourConnectors;