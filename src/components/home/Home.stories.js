import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { mount } from 'enzyme';

import Home from './Home.tsx';

const stories = storiesOf('Home', module);
stories.addDecorator(withInfo);

stories.add('default home page', () => {
  const story = <Home />;

  specs(() => describe('Default Home component', () => {
    it('should render welcome', () => {
      let output = mount(story);
      expect(output.text()).toContain('Welcome to Beautify');
    });
  }));

  return story;
});
