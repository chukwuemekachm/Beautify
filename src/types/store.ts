import { IProduct } from './product';

export interface IProductState {
  products: IProduct[],
  currentProduct: IProduct | {},
};

export interface IStoreState {
  products: IProductState,
};

export interface IAction {
  type: string,
  payload?: any,
  error?: any,
};

export interface IPromiseMiddlewareConfig {
  promiseTypeSuffixes?: string[],
  promiseTypeDelimiter?: string,
};
