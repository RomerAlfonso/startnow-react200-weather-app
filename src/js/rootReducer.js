import { combineReducers } from 'redux';
import searchReducer from './components/SearchEntries/searchReducer';

const rootReducer = combineReducers({
    // add reducers
    search: searchReducer
});

export default rootReducer;
