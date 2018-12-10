// Modules
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { mount } from 'enzyme';
import StoryRouter from 'storybook-react-router';

// Nav Links
import NavLink from './NavLink';

const stories = storiesOf('Nav Links', module);
stories.addDecorator(StoryRouter());
stories.addDecorator(withInfo);

stories.add('Nav Link', () => {
  const story = <NavLink to="/home">Home</NavLink>;

  specs(() => describe('Nav Link', () => {
    it('should display nav link', () => {
      let output = mount(story);
      expect(output.text()).toContain('Home');
    });
  }));

  return story;
});
