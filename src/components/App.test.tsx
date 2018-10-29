import { shallow } from 'enzyme';
import * as React from 'react';

import App from './App';

describe('App component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeTruthy();
  });
});
