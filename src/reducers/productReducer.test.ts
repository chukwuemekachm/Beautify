import productReducer, { initialState } from './productReducer';

describe('Product reducer', () => {
  it('should return unmodified state', () => {
    expect(productReducer(initialState, { type: 'SET_UP_NONE' }))
      .toEqual(initialState);
  });

  it('should handle SET UP action', () => {
    expect(productReducer(initialState, { type: 'SET_UP' }))
      .toEqual(initialState);
  });
});
