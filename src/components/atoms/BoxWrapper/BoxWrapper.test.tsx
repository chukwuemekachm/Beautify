import { shallow } from 'enzyme';
import * as React from 'react';

import BoxWrapper from './BoxWrapper';

describe('Test BoxWrapper', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<BoxWrapper marginLeft={'3rem'} />);
    expect(wrapper).toBeDefined();
  });
});
