import * as React from 'react';
import CopyRight from '../CopyRight';
import styleCss from './style.css';

export default function Footer(
  props: React.PropsWithChildren<{}>
): React.ReactElement {
  return (
    <footer className={styleCss.footer}>
      <div>{props.children}</div>
      <CopyRight />
    </footer>
  );
}
