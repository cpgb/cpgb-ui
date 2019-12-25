import * as React from 'react';
import styleCss from './style.css';

export interface CodeProps {
  title?: string;
  right?: React.ReactElement;
}

export default function Code(
  props: React.PropsWithChildren<CodeProps>
): React.ReactElement {
  return (
    <div className={styleCss.codeWrapper}>
      <header>{props.title}</header>
      <div>
        <div className={styleCss.code}>{props.children}</div>
        {props.right && <div className={styleCss.right}>{props.right}</div>}
      </div>
    </div>
  );
}
