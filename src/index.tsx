import 'normalize.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import Record from './pages/Record';
import Capturer from './pages/Capturer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/capturer" component={Capturer} />
      <Route path="/record" component={Record} />
      <Route path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
