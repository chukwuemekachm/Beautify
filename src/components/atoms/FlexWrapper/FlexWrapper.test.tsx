import { shallow } from 'enzyme';
import * as React from 'react';

import FlexWrapper from './FlexWrapper';

describe('Test FlexWrapper', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<FlexWrapper width="100%" />);
    expect(wrapper).toBeDefined();
  });
});
