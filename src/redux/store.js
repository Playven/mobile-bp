import { applyMiddleware, createStore, compose } from 'redux';
import middleware from './middleware';
import reducer from './reducer';

const enhancer = compose(applyMiddleware(...middleware));
const store = createStore(reducer, null, enhancer);

// export the store
export default store;
