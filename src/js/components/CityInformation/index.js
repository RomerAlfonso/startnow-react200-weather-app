import { connect } from 'react-redux';
import CityInformation from './CityInformation';

function mapStoreToProps(store) {
  return {
    searchInfo: store.search,
  };
}

export default connect(mapStoreToProps)(CityInformation);