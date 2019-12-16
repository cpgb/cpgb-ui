import * as React from 'react';
import styleCss from './style.css';

export default function CopyRight(): React.ReactElement {
  return (
    <div className={styleCss.copyRight}>
      <img
        src={require('../../asserts/logo-gray.png')}
        alt="logo"
        className={styleCss.logo}
      />
      &copy; 2019
    </div>
  );
}
