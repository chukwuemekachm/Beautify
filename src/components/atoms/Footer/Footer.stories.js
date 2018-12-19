// Modules
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { mount } from 'enzyme';

// Footer
import Footer from './Footer';

const stories = storiesOf('Footer', module);
stories.addDecorator(withInfo);

stories.add('Default Footer', () => <Footer />);
