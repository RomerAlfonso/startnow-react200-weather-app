import { connect } from 'react-redux';
import CityHistory from './CityHistory';

function mapStoreToProps(store) {
  return {
    searchHistory: store.search.history,
  };
}


export default connect(mapStoreToProps)(CityHistory);