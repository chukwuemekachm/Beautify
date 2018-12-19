import { shallow } from 'enzyme';
import * as React from 'react';

import Footer from './Footer';

describe('Test Footer.tsx', () => {
  const wrapper = shallow(<Footer />);

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain the appropriate text', () => {
    expect(wrapper.text())
      .toBe('MADE WITH LOVE BY TEAM BEAUTIFY');
  });
});
