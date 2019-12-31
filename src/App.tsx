import * as React from 'react';
import TitleBar from './components/TitleBar';
import Home from './pages/Home';
import Project from './pages/Project';
import SelectWindow from './pages/SelectWindow';
import styleCss from './index.css';
import { Switch, Route } from 'react-router-dom';
const { remote } = window.require('electron');

const App: React.FunctionComponent = (): React.ReactElement => {
  return (
    <div className={styleCss.appWrapper}>
      <TitleBar
        title="疯狂游戏盒子"
        onClose={(): void => {
          const window = remote.getCurrentWindow();
          window.emit('close');
        }}
      />
      <div className={styleCss.content}>
        <Switch>
          <Route path="/project" component={Project} />
          <Route path="/select-window" component={SelectWindow} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
