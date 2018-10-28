import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from '../store/configureStore';
import Home from './home/Home';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Home} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
