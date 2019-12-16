import * as React from 'react';
import TitleBar from './components/TitleBar';
import Home from './pages/Home';
import styleCss from './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App: React.FunctionComponent = (): React.ReactElement => {
  return (
    <div className={styleCss.appWrapper}>
      <TitleBar title="疯狂游戏盒子" />
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
