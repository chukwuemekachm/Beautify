import { IAction, IProductState } from '../types';

export const initialState: IProductState = {
  currentProduct: {},
  products: [],
};

/**
 * @description Handles product actions
 *
 * @param {object} state The product state
 * @param {object} action The action object
 *
 * @returns {object}
 */
const productReducer = (state: IProductState = initialState, action: IAction): {} => {
  switch (action.type) {
    case 'SET_UP':
      return { ...state };
    default:
      return state;
  }
};

export default productReducer;
