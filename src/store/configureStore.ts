import { AnyAction, applyMiddleware, createStore, Store} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import reducers from '../reducers';
import { IPromiseMiddlewareConfig } from '../types';

const config: IPromiseMiddlewareConfig = {
  promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR'],
};

const middlewares: any[] = [
  thunk,
  promiseMiddleware(config),
];

const store: Store<any, AnyAction> = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export default store;
