// Modules
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { mount } from 'enzyme';

// Buttons
import Button from './Button';

const stories = storiesOf('Buttons', module);
stories.addDecorator(withInfo);

stories.add('Default Button', () => {
  const story = <Button>Button</Button>;

  specs(() => describe('Button component', () => {
    it('should display button', () => {
      let output = mount(story);
      expect(output.text()).toContain('Button');
    });
  }));

  return story;
})
  .add('Block Button', () => {
    const story = <Button block>Button</Button>;

    specs(() => describe('Button component', () => {
      it('should display block button', () => {
        let output = mount(story);
        expect(output.text()).toContain('Button');
      });
    }));

    return story;
  });
