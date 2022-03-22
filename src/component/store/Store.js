import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Rootreducce from './reduce/Rootreducce';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

const store = createStore(
    Rootreducce,
    composeWithDevTools(applyMiddleware(thunk))
    )
export default store;