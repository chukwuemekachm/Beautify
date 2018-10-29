import { shallow } from 'enzyme';
import * as React from 'react';

import Home from './Home';

describe('Home component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toBeTruthy();
  });
});
