import * as React from 'react';
import styleCss from './style.css';

export default function Button(
  props: React.PropsWithChildren<{}>
): React.ReactElement {
  return <button className={styleCss.button}>{props.children}</button>;
}
