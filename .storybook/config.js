import { configure } from '@storybook/react';
import { specs, describe, it } from 'storybook-addon-specifications';

import expect from 'expect';
import { configure as configureEnzyme } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configureEnzyme({ adapter: new Adapter() });

window.expect = expect;
window.it = it;
window.describe = describe;
window.specs = specs;

// automatically import all files ending in *.stories.js
const req = require.context('../src/', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
