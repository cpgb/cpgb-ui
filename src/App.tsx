import * as React from 'react';
import TitleBar from './components/TitleBar';
import Home from './pages/Home';
import styleCss from './index.css';
import { Switch, Route } from 'react-router-dom';

const App: React.FunctionComponent = (): React.ReactElement => {
  return (
    <div className={styleCss.appWrapper}>
      <TitleBar title="疯狂游戏盒子" />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
