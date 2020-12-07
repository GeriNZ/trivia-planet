import { createStore, applyMiddleware } from 'redux';
import searchReducer from './reducers/searchReducer';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(searchReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;