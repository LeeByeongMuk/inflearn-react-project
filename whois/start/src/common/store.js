import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import SearchReducer from '../serach/state';
import SearchSaga from '../serach/state/saga';

const reducer = combineReducers({
  search: SearchReducer,
});
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

function* rootSaga() {
  yield all([SearchSaga()]);
}
sagaMiddleware.run(rootSaga);

export default store;
