import { shallow } from 'enzyme';
import * as React from 'react';

import Button from './Button';

describe('Button Atom(Button.tsx)', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<Button>Button</Button>);
    expect(wrapper).toBeDefined();
  });

  it('should display the "Hello"', () => {
    const wrapper = shallow(<Button block={true}>Hello</Button>);
    expect(wrapper.text()).toBe('Hello');
  });
});
