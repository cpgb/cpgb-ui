import * as React from 'react';
import styleCss from './style.css';

interface Props {
  width?: number;
}

export default function Button(
  props: React.PropsWithChildren<Props> & React.DOMAttributes<HTMLButtonElement>
): React.ReactElement {
  const { children, ...rest } = props;
  return (
    <button
      className={styleCss.button}
      style={{ width: props.width }}
      {...rest}
    >
      {children}
    </button>
  );
}
