import { shallow } from 'enzyme';
import * as React from 'react';

import NavLink from './NavLink';

describe('NavLink Atom(NavLink.tsx)', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<NavLink to="/home">Home</NavLink>);
    expect(wrapper).toBeDefined();
  });

  it('should display "About', () => {
    const wrapper = shallow(<NavLink to="/about">About</NavLink>);
    expect(wrapper.text()).toBe('About');
  });
});
