import * as React from 'react';
import TitleBar from './components/TitleBar';

const App: React.FunctionComponent = (): React.ReactElement => {
  return (
    <div>
      <TitleBar title="疯狂游戏盒子" />
      <img src={require('./asserts/logo.png') as string} alt="logo" />
    </div>
  );
};

export default App;
