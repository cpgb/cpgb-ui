import * as React from 'react';
import styleCss from './style.css';

export interface PlaceholderProps {
  height?: number;
}

export default function Placeholder(
  props: PlaceholderProps
): React.ReactElement {
  return (
    <div
      className={styleCss.placeholderWrapper}
      style={{ height: props.height }}
    >
      <img src={require('../../asserts/logo-gray.png')} alt="logo-gray" />
      <h3>CPGB</h3>
    </div>
  );
}
